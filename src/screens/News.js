// import { Link } from '@react-navigation/native';
// import axios from 'axios';
// // import { error } from 'console';
// import React, { useEffect, useState } from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   Image,
//   TouchableOpacity,
//   Linking
// } from 'react-native';



// const News = () => {
//   const [articles,setArticles] = useState([]);
  

//   const getNews = async () =>{
//     try{
//     const limit = 10;
//     const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=7acf8f9bd9934aadbd8cf0398abc8895')
//     const apiData = await response.json()
//     const trunctedData = apiData.slice(0,limit)
//     setArticles(trunctedData);
//   }catch(error){
//     console.log(error)
//   }
//   }
//   useEffect(()=>{
//     getNews();
//   },[]);
  
//   const courseCard = ({item}) =>{
//     return (
      
//       <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={articles}
//                 renderItem = {({item}) =>
//                 <View style={styles.mainContainer}>
//         <View style={styles.courseContainer}>
//           <View>
//             <Image style={styles.cardImage}
//             source={item.urlToImage}
//             resizeMode='contain'/>
//           </View>
//           <Text style={styles.mainHeader}>
//             {item.title}
//           </Text>
//           <Text style={styles.description}>
//             {item.description}
//           </Text>
          
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.buttonStyle}
//             onPress={() =>Linking.openURL(item.url)}>
//               <Text style={styles.buttonText}>Get Full News</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//                     }
//                 keyExtractor = {(item) => item.title}
//             />

//         </SafeAreaView>
//     )
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//       keyExtractor={(item) =>item.id}
//       data = {articles}
//       renderItem={courseCard}/>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   cardImage:{
//     width:"100%",
//     height:undefined,
//     aspectRatio:1
//   },
//   mainContainer:{
//     paddingHorizontal:20
//   },
//   courseContainer:{
//     padding:30,
//     backgroundColor:"rgba(255,255,255,0.90)",
//     textAlign:"center",
//     borderRadius:5,
//     shadowColor:"grey",
//     shadowOffset:{width:0,height:0},
//     shadowOpacity:0.5,
//     shadowRadius:8,
//     elevation:8,
//     marginVertical:30
//   },
//   mainHeader:{
//     fontSize:15,
//     color:"#344405",
//     textTransform:"uppercase",
//     fontWeight:500,
//     paddingTop:15,
//     paddingBottom:15,
//     textAlign:"center"
//   },
//   description:{
//     textAlign:"justify",
//     fontStyle:"italic",
//     paddingBottom:15,
//     lineHeight:20
//   },
//   buttonContainer:{
//     display:"flex",
//     flexDirection:"row",
//     justifyContent:"center"
//   },
//   buttonStyle:{
//     backgroundColor:"#809fff",
//     borderRadius:5,
//     borderTopRightRadius:5,
//     paddingVertical:10,
//     paddingHorizontal:18,
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   buttonText:{
//     fontSize:15,
//     color:"black",
//     textTransform:"uppercase"
//   }
// });


// export default News;

import { Link } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Ola electric scooter scam dupes thousands; 20 people arrested',
    description: "Delhi Police have arrested 20 people from across the country in connection with an elaborate Ola Electric scooter scam.The scammers created a fake website to dupe over 1,000 people looking to purchase the electric vehicles and defrauded them of crores.The funds were taken from them in the name of insurance, down payments, delivery charges, and more.",
    image_url: require('../../assets/ola.webp'),
    link: "https://www.newsbytesapp.com/news/auto/ola-electric-scooter-scam-busted/story",
  },
  {
    id: '2',
    title: 'Haryana Sees 5,000% Jump In Cyber Crime Complaints Since 2019',
    description: "Haryana saw a jaw dropping rise of almost 5,000 per cent in cyber crime incidents since 2019, registering 66,784 such complaints in 2022, officials said on Thursday.The state in 2019 had logged 1,362 cyber crime complaints, which rocketed by 4,803.40 per cent by the end of 2022, according to the data.",
    image_url: require('../../assets/picture_2.jpg'),
    link: "https://www.ndtv.com/india-news/haryana-sees-5-000-jump-in-cyber-crime-complaints-since-2019-3945027",
  },
  {
    id: '3',
    title: 'Schemes by Government of India',
    description: "Developing a ‘cyber-secure nation’ for businesses and individuals is a key component of India's national cybersecurity strategy.A SKOCH event featured Indian National Cybersecurity Coordinator Rajesh Pant, who claimed that when India's cybersecurity strategy policy is released in 2020, it will be able to secure the entire nation. In plenty of ways, this will assist the government in its vision for a $5 trillion economy",
    image_url:require('../../assets/initiatives.png'),
    link: "https://securiumsolutions.org/latest-10-indian-government-initiatives-on-cybersecurity/",
  },
  {
    id:'4',
    title: 'Pan-India customer care racket busted; 5 of six held from Jamtara',
    description: "Delhi Police on Wednesday, April 19, 2023 said it has arrested five men from Jharkhand’s Jamtara and one more from West Bengal’s Murshidabad for allegedly duping over 2,500 people of crores of rupees in a pan-India customer care fraud.",
    image_url: require('../../assets/racket.jpg'),
    link: "https://www.thehindu.com/news/cities/Delhi/pan-india-customer-care-racket-busted-six-held-over-21000-sim-cards-seized/article66757092.ece",
    
  }
];

const News = () => {
  const courseCard = ({item}) =>{
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage}
            source={item.image_url}
            resizeMode='contain'/>
          </View>
          <Text style={styles.mainHeader}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={() =>Linking.openURL(item.link)}>
              <Text style={styles.buttonText}>Get Full News</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      keyExtractor={(item) =>item.id}
      data = {DATA}
      renderItem={courseCard}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardImage:{
    width:"100%",
    height:undefined,
    aspectRatio:1
  },
  mainContainer:{
    paddingHorizontal:20
  },
  courseContainer:{
    padding:30,
    backgroundColor:"rgba(255,255,255,0.90)",
    textAlign:"center",
    borderRadius:5,
    shadowColor:"grey",
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30
  },
  mainHeader:{
    fontSize:15,
    color:"#344405",
    textTransform:"uppercase",
    fontWeight:500,
    paddingTop:15,
    paddingBottom:15,
    textAlign:"center"
  },
  description:{
    textAlign:"justify",
    fontStyle:"italic",
    paddingBottom:15,
    lineHeight:20
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  },
  buttonStyle:{
    backgroundColor:"#809fff",
    borderRadius:5,
    borderTopRightRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    fontSize:15,
    color:"black",
    textTransform:"uppercase"
  }
});

export default News;