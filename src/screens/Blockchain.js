import { View, StyleSheet, Text, ScrollView , Picker} from 'react-native'
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import React from 'react'
import { List } from 'react-native-paper';
import DropdownSelect from './Blockchain/Dmenu';
const Blockchain = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [data, setdata] = React.useState([]);
  const [loader, setloader] = React.useState(true);
  async function getdata() {
    setloader(true);
    let headersList = {
      "Accept": "/",
      "Authorization": "Bearer cqt_rQMkdq8K9ww6pW8Pt7KYd6cbCdBj"
    }

    let response = await fetch("https://api.covalenthq.com/v1/cq/covalent/app/bitcoin/transactions/?address=bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2", {
      method: "GET",
      headers: headersList
    });
    if (response.ok) {
      let data = await response.text();
      data = JSON.parse(data);
      // console.log(data.data.items);
      setdata(data.data.items);
      setloader(false);
    }
  }
  const handlePress = () => setExpanded(!expanded);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30, marginTop: 40 }}>Wallet Transactions</Text>
      <Input
        style={styles.input}
        placeholder='Enter Wallet Address'
      />
      <DropdownSelect></DropdownSelect>
      <Button
        style={{ width: '100%', margin: 'auto',  }}
        title="Search"
        type="solid"
        onPress={() => {
          getdata();
        }}
      />
      <ScrollView>
        <List.Section title="List of Transactions:">
          {
            loader === true ? "" :
              data.map((item, idx) => {
                return (
                  <List.Accordion
                    key={idx}
                    title={`Transaction value = ${item.value} Satoshi`}
                    left={props => <List.Icon {...props} icon="" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title={`Transaction hash = ${item.tx_hash}`} />
                    <List.Item title={`Block hash = ${item.block_hash}`} />
                  </List.Accordion>
                )
              })
          }
        </List.Section>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

  input: {
    marginVertical: 4,
    marginTop: '20%',
    marginLeft: 10,
    marginRight: 10
  },
  picker: {
    height: 40,
    width: '100%',
    color: 'white',
  },
});
export default Blockchain


// 0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1

// bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2