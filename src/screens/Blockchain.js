import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { Alchemy, Network } from "alchemy-sdk";
import { List } from 'react-native-paper';
const Blockchain = () => {
  const [text, settext] = React.useState('');
  const [data, setdata] = React.useState([]);
  const [loader, setloader] = React.useState(true);
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const config = {
    apiKey: "tOlngHWvrJYw9XKnkDpJ0P4bLwezfCQI",
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);
  const fetchdata = async () => {
    setloader(true);
    const data = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      fromAddress: text,
      category: ["external", "internal", "erc20", "erc721", "erc1155"],
    });
    console.log(data.transfers);
    setdata(data.transfers);
    setloader(false);
  }
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>Blockchain data</Text>
      <TextInput
      style={styles.input}
      placeholder="Enter Address"
      value={text}
      onChangeText={e=>settext(e.target.value)}
      />
      <Pressable style={styles.button} onPress={fetchdata}>
        <Text style={styles.text}>Search</Text>
      </Pressable>
      <List.Section title="Accordions">
        {
          loader === true ? "" :
            data.map((item, idx) => {
              return (
                <List.Accordion key={idx}
                  title={`Amount Send  =  ${item.value}`}
                  left={props => <List.Icon {...props} icon="" />}
                  expanded={expanded}
                  onPress={handlePress}>
                  <List.Item title={`Asset =  ${item.asset}`} />
                  <List.Item title={`Block Number =  ${item.blockNum}`} />
                  <List.Item title={`Receiver =   ${item.to}`} />
                  <List.Item title={`Amount Send =  ${item.value}`} />
                  <List.Item title={`Contract Address =  ${item.rawContract.address}`} />
                </List.Accordion>
              )
            })
        }
      </List.Section>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 30,
    borderWidth: 2,
    padding: 20,
    borderRadius: 50
  },
  background: {
    backgroundColor: "white",
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%"
  },
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
export default Blockchain