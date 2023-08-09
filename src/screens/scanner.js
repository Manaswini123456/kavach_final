import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import axios from "axios";

const Scanner = () => {
  const finderWidth = 280;
  const finderHeight = 230;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const viewMinX = (width - finderWidth) / 2;
  const viewMinY = (height - finderHeight) / 2;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  const [data, setdata] = useState("");
  const [spamUPIs, setSpamUPIs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error_upi, setErrorUpi] = useState("");
  const [upiinput, setupiInput] = useState("");
  const [upiresult, setupiResult] = useState(null);
  const upihandle = () => {
    setIsLoading(true);
    console.log(upiinput);
    setErrorUpi("");
    axios
      .get(`https://kavachallapi-production.up.railway.app/upi/${upiinput}`)
      .then((response) => {
        console.log("API Response:", response.data);
        setupiResult(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setupiResult(false);
        setErrorUpi("Something went wrong. Please try again.");
        setIsLoading(false);
      });
  };

  function isValid_UPI_ID(upi_Id) {
    let regex = new RegExp("[a-zA-Z0-9.-_]{2,49}@[a-zA-Z._]{2,49}");

    if (upi_Id == null) {
      return "";
    }
    if (regex.test(upi_Id) == true) {
      let matches = upi_Id.match(regex);
      let upiAddress = matches[0].trim(); 
      alert(upiAddress.substring(13)); 
    //   axios
    //     .get(`https://kavachallapi-production.up.railway.app/upi/${upiAddress.substring(13)}`)
    //     .then((response) => {
    //       console.log("API Response:", response.data); 
    //       alert(upiAddress.substring(13)); 
    //     //   alert(response.data.name); 
    //     //   alert(response.data.spam_mark)
    //       setupiResult(response.data);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data from API:", error);
    //       setupiResult(false);
    //       setErrorUpi("Something went wrong. Please try again.");
    //       setIsLoading(false);
    //     });
    //   upihandle();
    } else {
      alert("");
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data, bounds: { origin } = {} }) => {
    if (!scanned) {
      const { x, y } = origin;

      if (
        x >= viewMinX &&
        y >= viewMinY &&
        x <= viewMinX + finderWidth / 2 &&
        y <= viewMinY + finderHeight / 2
      ) {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        setdata(data);
        isValid_UPI_ID(data);
      }
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        type={type}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
            onPress={() => {
              setType(
                type === BarCodeScanner.Constants.Type.back
                  ? BarCodeScanner.Constants.Type.front
                  : BarCodeScanner.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, margin: 5, color: "white" }}>
              Flip
            </Text>
          </TouchableOpacity>
        </View>

        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />

        {scanned && (
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        )}
      </BarCodeScanner>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Scanner;
