import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Course = () => {
  const [airplaneModeEnabled, setAirplaneModeEnabled] = React.useState(false);
  const [wifiEnabled, setWifiEnabled] = React.useState(false);
  const [bluetoothEnabled, setBluetoothEnabled] = React.useState(false);
  const [mobileDataEnabled, setMobileDataEnabled] = React.useState(false);
  const [locationEnabled, setLocationEnabled] = React.useState(false);
  const [batterySaverEnabled, setBatterySaverEnabled] = React.useState(false);
  const [sms,setSMSEnabled] = React.useState(false);
  const [url,setURLEnabled] = React.useState(false);
  const [upi,setUPIEnabled] = React.useState(false);
  const [bitcoin,setBitcoinEnabled] = React.useState(false);


  const toggleAirplaneMode = () => {
    setAirplaneModeEnabled(!airplaneModeEnabled);
  };

  const toggleWifi = () => {
    setWifiEnabled(!wifiEnabled);
  };

  const toggleBluetooth = () => {
    setBluetoothEnabled(!bluetoothEnabled);
  };

  const toggleMobileData = () => {
    setMobileDataEnabled(!mobileDataEnabled);
  };

  const toggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  const toggleBatterySaver = () => {
    setBatterySaverEnabled(!batterySaverEnabled);
  };

  const toggleSMS = () =>{
    setSMSEnabled(!sms)
  }

  const toggleURL = () =>{
    setURLEnabled(!url)
  }

  const toggleUPI = () =>{
    setUPIEnabled(!upi)
  }

  const toggleBitcoin = () =>{
    setBitcoinEnabled(!bitcoin)
  }

  return (
    <>
    
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Communication Settings</Text>
          <View style={styles.option}>
            <Icon name="airplanemode-on" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Airplane mode</Text>
            <Switch
              value={airplaneModeEnabled}
              onValueChange={toggleAirplaneMode}
            />
          </View>
          <View style={styles.option}>
            <Icon name="wifi" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Wi-Fi</Text>
            <Switch value={wifiEnabled} onValueChange={toggleWifi} />
          </View>
          <View style={styles.option}>
            <Icon name="bluetooth" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Bluetooth</Text>
            <Switch value={bluetoothEnabled} onValueChange={toggleBluetooth} />
          </View>
          <View style={styles.option}>
            <Icon name="data-usage" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Mobile data</Text>
            <Switch
              value={mobileDataEnabled}
              onValueChange={toggleMobileData}
            />
          </View>
          <View style={styles.option}>
            <Icon name="location-on" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Location</Text>
            <Switch value={locationEnabled} onValueChange={toggleLocation} />
          </View>
        </View>
        {/* Contact details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          <View style={styles.option}>
            <Icon name="contact-phone" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Use Contacts</Text>
            <Switch
              value={batterySaverEnabled}
              onValueChange={toggleBatterySaver}
            />
          </View>
          {/* Read SMS Headers */}
          <View style={styles.option}>
            <Icon name="comment" size={24} style={styles.icon} />
            <Text style={styles.optionText}>SMS Headers & Templates</Text>
            <Switch
              value={sms}
              onValueChange={toggleSMS}
            />
          </View>
          {/* URL Links */}
          <View style={styles.option}>
            <Icon name="signal-cellular-connected-no-internet-4-bar" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Read URL Links</Text>
            <Switch
              value={url}
              onValueChange={toggleURL}
            />
          </View>
          {/* UPI Addresses */}
          <View style={styles.option}>
            <Icon name="payment" size={24} style={styles.icon} />
            <Text style={styles.optionText}>UPI Addresses</Text>
            <Switch
              value={upi}
              onValueChange={toggleUPI}
            />
          </View>
          {/* Bitcoin Wallet Address */}
          <View style={styles.option}>
            <Icon name="account-balance-wallet" size={24} style={styles.icon} />
            <Text style={styles.optionText}>Bitcoin Wallet Address</Text>
            <Switch
              value={bitcoin}
              onValueChange={toggleBitcoin}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: 10,
    width: "100%",
    height: "100%",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 350,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    height: 60,
  },
  icon: {
    color: "#757575",
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    color: "#212121",
    fontSize: 16,
    fontWeight: "400",
  },
  headingView: {
    position: "relative",

    top: 45,
    zIndex: "9999",
  },
  heading:{
    fontWeight: "bold",
    fontSize: 30,
    textAlign:"center"
   
  }
});

export default Course;