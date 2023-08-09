import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, CheckBox } from 'react-native';

const Report_url = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [feedback, setFeedback] = useState('');
  const [reportedUrls, setReportedUrls] = useState([]);
  const [urlsFromApi, setUrlsFromApi] = useState([]);

  useEffect(() => {
    // Fetch URLs from API and update state
    fetchUrlsFromApi();
  }, []);

  const fetchUrlsFromApi = async () => {
    try {
      const response = await fetch('http://10.10.49.229:3000/api/get-spam-url');
      const data = await response.json();
      setUrlsFromApi(data.urls);
    } catch (error) {
      console.error('Error fetching URLs from API', error);
    }
  };

  const handleSubmit = async () => {
    const formData = {
      aadharNumber,
      name,
      phoneNumber,
      address,
      feedback,
      reportedUrls,
    };

    try {
      const response = await fetch('http://10.10.49.229:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <ScrollView>
      <Text>Aadhar Card Number:</Text>
      <TextInput value={aadharNumber} onChangeText={setAadharNumber} />

      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Phone Number:</Text>
      <TextInput value={phoneNumber} onChangeText={setPhoneNumber} />

      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} />

      <Text>Feedback:</Text>
      <TextInput value={feedback} onChangeText={setFeedback} />

      <Text>Select URLs to Report:</Text>
      {/* {urlsFromApi.map((url, index) => (
        <View key={index}>
          <CheckBox
            value={reportedUrls.includes(url)}
            onValueChange={() => {
              if (reportedUrls.includes(url)) {
                setReportedUrls(reportedUrls.filter((reportedUrl) => reportedUrl !== url));
              } else {
                setReportedUrls([...reportedUrls, url]);
              }
            }}
          />
          <Text>{url}</Text>
        </View>
      ))} */}

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default Report_url