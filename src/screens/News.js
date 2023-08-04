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
  // {
  //   id: '17',
  //   title: 'Ola electric scooter scam dupes thousands; 20 people arrested',
  //   description: "Delhi Police have arrested 20 people from across the country in connection with an elaborate Ola Electric scooter scam.The scammers created a fake website to dupe over 1,000 people looking to purchase the electric vehicles and defrauded them of crores.The funds were taken from them in the name of insurance, down payments, delivery charges, and more.",
  //   image_url: require('../../assets/ola.webp'),
  //   link: "https://www.newsbytesapp.com/news/auto/ola-electric-scooter-scam-busted/story",
  // },
  // {
  //   id: '18',
  //   title: 'Haryana Sees 5,000% Jump In Cyber Crime Complaints Since 2019',
  //   description: "Haryana saw a jaw dropping rise of almost 5,000 per cent in cyber crime incidents since 2019, registering 66,784 such complaints in 2022, officials said on Thursday.The state in 2019 had logged 1,362 cyber crime complaints, which rocketed by 4,803.40 per cent by the end of 2022, according to the data.",
  //   image_url: require('../../assets/picture_2.jpg'),
  //   link: "https://www.ndtv.com/india-news/haryana-sees-5-000-jump-in-cyber-crime-complaints-since-2019-3945027",
  // },
  // {
  //   id: '19',
  //   title: 'Schemes by Government of India',
  //   description: "Developing a ‘cyber-secure nation’ for businesses and individuals is a key component of India's national cybersecurity strategy.A SKOCH event featured Indian National Cybersecurity Coordinator Rajesh Pant, who claimed that when India's cybersecurity strategy policy is released in 2020, it will be able to secure the entire nation. In plenty of ways, this will assist the government in its vision for a $5 trillion economy",
  //   image_url:require('../../assets/initiatives.png'),
  //   link: "https://securiumsolutions.org/latest-10-indian-government-initiatives-on-cybersecurity/",
  // },
  // {
  //   id:'20',
  //   title: 'Pan-India customer care racket busted; 5 of six held from Jamtara',
  //   description: "Delhi Police on Wednesday, April 19, 2023 said it has arrested five men from Jharkhand’s Jamtara and one more from West Bengal’s Murshidabad for allegedly duping over 2,500 people of crores of rupees in a pan-India customer care fraud.",
  //   image_url: require('../../assets/racket.jpg'),
  //   link: "https://www.thehindu.com/news/cities/Delhi/pan-india-customer-care-racket-busted-six-held-over-21000-sim-cards-seized/article66757092.ece",
    
  // },
  {
    id: 1,
    author: "Mathieu Rosemain",
    title: "Billionaire Kretinsky in talks to buy Atos unit in $2.2 billion deal",
    description: "PARIS (Reuters) -Czech billionaire Daniel Kretinsky is in exclusive talks to buy Atos' loss-making legacy operations in a 2 billion-euro ($2.20 billion) deal...",
    link: "https://finance.yahoo.com/news/french-company-atos-talks-sell-063008169.html",
    image_url: "https://media.zenfs.com/en/reuters-finance.com/e7e856c5a6ea413c3ca0f01c9a75197e",
    publishedAt: "2023-08-01T06:30:08Z",
    content: "By Mathieu Rosemain\r\nPARIS (Reuters) -Czech billionaire Daniel Kretinsky is in exclusive talks to buy Atos' loss-making legacy operations in a 2 billion-euro ($2.20 billion) deal that will significan… [+1681 chars]"
},
{
    id: 2,
    author: "EQS",
    title: "DATAGROUP SE: Release of 2023 Lünendonk Study on the Market for IT Services in Germany: DATAGROUP Again Among the Top 10 Service Providers",
    description: "(marketscreener.com) \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nEQS-News: DATAGROUP SE\n\n\n / Key word: Study\n\n\n\n\n\nDATAGROUP SE: Release of 2023 Lünendonk Study on the Market for IT Services in Germany: DATAGROUP Again Among the Top 10 Service Providers \n\n\n\n\n\n\n01.08.2023 / 08:13 …",
    link: "https://www.marketscreener.com/quote/stock/DATAGROUP-SE-486710/news/DATAGROUP-SE-Release-of-2023-Lunendonk-Study-on-the-Market-for-IT-Services-in-Germany-DATAGROUP-Ag-44475128/",
    image_url: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
    publishedAt: "2023-08-01T06:15:02Z",
    content: "EQS-News: DATAGROUP SE\r\n/ Key word(s): Study\r\nDATAGROUP SE: Release of 2023 Lünendonk Study on the Market for IT Services in Germany: DATAGROUP Again Among the Top 10 Service Providers 01.08.2023 / 0… [+5606 chars]"
},
{
    id: 3,
    author: "GlobeNewswire",
    title: "Paul Saleh takes over as Atos Chief Financial Officer",
    description: "(marketscreener.com) Paris, August 1st, 2023 – Atos today announces that Paul Saleh will join the Group as Chief Financial Officer, taking over from Nathalie Sénéchault who leaves the Group after an intense period of transformation. His term of office will be…",
    link: "https://www.marketscreener.com/quote/stock/ATOS-SE-4612/news/Paul-Saleh-takes-over-as-Atos-Chief-Financial-Officer-44474945/",
    image_url: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    publishedAt: "2023-08-01T06:02:05Z",
    content: "Paris, August 1st, 2023 Atos today announces that Paul Saleh will join the Group as Chief Financial Officer, taking over from Nathalie Sénéchault who leaves the Group after an intense period of trans… [+2789 chars]"
},
{
    id: 4,
    author: "GlobeNewswire",
    title: "Progress on share buyback programme",
    description: "(marketscreener.com) Progress on share buyback programme ING announced today that, in line with the launch of our €1.5 billion share buyback programme announced on 11 May 2023, we repurchased 1,588,973 shares during the week of 24 July 2023 up to and includin…",
    link: "https://www.marketscreener.com/quote/stock/ING-GROEP-N-V-56358303/news/Progress-on-share-buyback-programme-44474898/",
    image_url: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    publishedAt: "2023-08-01T06:01:04Z",
    content: "Progress on share buyback programme\r\nING announced today that, in line with the launch of our 1.5 billion share buyback programme announced on 11 May 2023, we repurchased 1,588,973 shares during the … [+8885 chars]"
},
{
    id: 5,
    author: "Marco Ponteprino",
    title: "Allarme hacker: pagine verificate Facebook usate per diffondere malware",
    description: "Le pagine verificate di Facebook prese di mira dagli hacker, 3.200 quelle già rubate: cosa sta succedendo sul social network?",
    link: "https://www.ilsoftware.it/allarme-hacker-pagine-verificate-facebook-usate-per-diffondere-malware/",
    image_url: "https://www.ilsoftware.it/app/uploads/2023/07/Progetto-senza-titolo-21.jpg",
    publishedAt: "2023-08-01T06:00:20Z",
    content: "Le pagine verificate di Facebook, come è facile intuire dal nome stesso, servono per certificare la proprietà delle stesse.\r\nCiò significa che, agli occhi di qualunque utente della piattaforma Meta, … [+1811 chars]"
},
{
    id: 6,
    author: "ING Group",
    title: "Progress on share buyback programme",
    description: "Progress on share buyback programme  ING announced today that, in line with the launch of our €1.5 billion share buyback programme announced on 11 May......",
    link: "https://www.globenewswire.com/news-release/2023/08/01/2715464/0/en/Progress-on-share-buyback-programme.html",
    image_url: "https://ml-eu.globenewswire.com/Resource/Download/f98b0fea-4867-42b4-a7ea-9e63eda03ea5",
    publishedAt: "2023-08-01T06:00:00Z",
    content: "Progress on share buyback programme\r\nING announced today that, in line with the launch of our 1.5 billion share buyback programme announced on 11 May 2023, we repurchased 1,588,973 shares during the … [+8830 chars]"
},
{
    id: 7,
    author: "GlobeNewswire",
    title: "Atos to complete its transformation through the contemplated sale of Tech Foundations",
    description: "(marketscreener.com) Atos to complete its transformation through the contemplated sale of Tech Foundations Atos to be renamed Eviden, benefitting from a strengthened capital structure, post transaction Atos to call an EGM to approve this comprehensive plan At…",
    link: "https://www.marketscreener.com/quote/stock/ATOS-SE-4612/news/Atos-to-complete-its-transformation-through-the-contemplated-sale-of-Tech-Foundations-44474812/",
    image_url: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    publishedAt: "2023-08-01T05:42:01Z",
    content: "Atos to complete its transformation through the contemplated sale of Tech Foundations\r\nAtos to be renamed Eviden,benefitting from a strengthened capital structure, post transaction\r\nAtos to call an E… [+25433 chars]"
},
{
    id: 8,
    author: "Atos International",
    title: "Atos to complete its transformation through the contemplated sale of Tech Foundations",
    description: "Atos to complete its transformation through the contemplated sale of Tech Foundations  Atos to be renamed Eviden, benefitting from a strengthened...",
    link: "https://www.globenewswire.com/news-release/2023/08/01/2715444/0/en/Atos-to-complete-its-transformation-through-the-contemplated-sale-of-Tech-Foundations.html",
    image_url: "https://ml-eu.globenewswire.com/Resource/Download/7bfbf7a2-4bbd-4e56-b847-63e271a8e3fd",
    publishedAt: "2023-08-01T05:41:00Z",
    content: "Atos to complete its transformation through the contemplated sale of Tech Foundations\r\nAtos to be renamed Eviden,benefitting from a strengthened capital structure, post transaction\r\nAtos to call an E… [+24954 chars]"
},
{
    id: 9,
    author: "Krishi Chowdhary",
    title: "US Senator Holds Microsoft Responsible for Chinese Hack",
    description: "Ron Wyden, a leading US Senator, blames Microsoft for the Chinese hack of Exchange Online. On Thursday, he called on the Department of Justice and a couple of other agencies...\nThe post US Senator Holds Microsoft Responsible for Chinese Hack appeared first on…",
    link: "https://techreport.com/news/us-senator-holds-microsoft-responsible-for-chinese-hack/",
    image_url: "https://techreport.com/wp-content/uploads/2023/07/shutterstock_1939109740-1-1-scaled.jpg",
    publishedAt: "2023-08-01T05:28:14Z",
    content: "Ron Wyden, a leading US Senator, blames Microsoft for the Chinese hack of Exchange Online. On Thursday, he called on the Department of Justice and a couple of other agencies to launch separate probes… [+3134 chars]"
},
{
    id: 10,
    author: "Help Net Security",
    title: "Keeping the cloud secure with a mindset shift",
    description: "Gartner estimates that in 2023 worldwide end-user spending on public cloud services will grow by 21.7% and hit nearly $600 billion. Even as the economic downturn has most businesses looking for ways to tighten their belts, the cloud remains one investment few…",
    link: "https://www.helpnetsecurity.com/2023/08/01/cloud-security-approach/",
    image_url: "https://img.helpnetsecurity.com/wp-content/uploads/2023/06/25142723/cloudfiles1.jpg",
    publishedAt: "2023-08-01T05:00:20Z",
    content: "Gartner estimates that in 2023 worldwide end-user spending on public cloud services will grow by 21.7% and hit nearly $600 billion. Even as the economic downturn has most businesses looking for ways … [+6298 chars]"
},
{
    id: 11,
    author: "redakce@lupa.cz (Lupa.cz: Martin Drtina)",
    title: "Regulace podle NIS2: Žádosti o výjimky i příliš pravomocí pro NÚKIB. Jaké jsou připomínky ke kyberzákonu?",
    description: "Nejvíce vadí nesrozumitelnost a úprava týkající se bezpečnosti dodavatelských vztahů. Kdo a jak chce změnit chystaný zákon o kybernetické bezpečnosti?",
    link: "https://www.lupa.cz/clanky/regulace-podle-nis2-zadosti-o-vyjimky-i-prilis-pravomoci-pro-nukib-jake-jsou-pripominky-ke-kyberzakonu/",
    image_url: "https://i.iinfo.cz/images/495/kyberneticka-bezpecnost-hack-utok-kod-1_watermark-lupa-cz.jpg",
    publishedAt: "2023-08-01T04:30:01Z",
    content: "V pedstavování povinností, které musí plnit povinné subjekty s vyí dleitostí (essential), jsme v minulém dílu skonili u analýzy rizik a hledání zpsobu jejich zvládnutí. Dnes v seriálu Regulace podle … [+15133 chars]"
},
{
    id: 12,
    author: "Help Net Security",
    title: "Strategies for ensuring compliance and security in outdated healthcare IT systems",
    description: "With the average price tag for a healthcare data breach at an all-time high, the overall financial damage to an organization is high regarding economic loss and reputation repair. According to the Cybersecurity and Infrastructure Security Agency (CISA), using…",
    link: "https://www.helpnetsecurity.com/2023/08/01/compliance-security-outdated-healthcare-it-systems-video/",
    image_url: "https://img.helpnetsecurity.com/wp-content/uploads/2018/05/09101017/healthcare-1.jpg",
    publishedAt: "2023-08-01T04:00:33Z",
    content: "With the average price tag for a healthcare data breach at an all-time high, the overall financial damage to an organization is high regarding economic loss and reputation repair.\r\nAccording to the C… [+615 chars]"
},
{
    id: 13,
    author: "Nicola Davis",
    title: "Children with eating disorders not given timely access to care, NHS data shows",
    description: "Some urgent cases waiting more than 12 weeks for treatment, according to children’s commissioner for EnglandChildren with “serious and potentially life-threatening” eating disorders are not being given timely access to care, the children’s commissioner for En…",
    link: "https://www.theguardian.com/society/2023/aug/01/children-with-eating-disorders-not-given-timely-access-to-care-nhs-data-shows",
    image_url: "https://i.guim.co.uk/img/media/586e8d17096d104c48c8573ce81d0ebbf4b06e9d/0_37_5300_3180/master/5300.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9b40ca0d8ed4f79f206a2ec58a5cbe57",
    publishedAt: "2023-08-01T04:00:12Z",
    content: "Children with serious and potentially life-threatening eating disorders are not being given timely access to care, the childrens commissioner for England has warned, as analysis shows the number star… [+8532 chars]"
},
{
    id: 14,
    author: "Al Jazeera",
    title: "Can AI predict cancer?",
    description: "There,s mounting evidence that it can but ethical and logistical questions still cloud AI’s medical future.",
    link: "https://www.aljazeera.com/features/2023/8/1/can-ai-predict-cancer",
    image_url: "https://www.aljazeera.com/wp-content/uploads/2023/08/story_29_final-1690855281.jpg?resize=1620%2C1080&quality=80",
    publishedAt: "2023-08-01T03:42:43Z",
    content: "A patient waits anxiously in the doctors office. The specialist walks in to inform them that they have been diagnosed with cancer. But there is good news. It has been discovered at an early stage. Th… [+14408 chars]"
},
{
    id: 15,
    author: "Help Net Security",
    title: "The gap in users’ identity security knowledge gives cybercriminals an opening",
    description: "With exponential growth in the number of human and machine actors on the network and more sophisticated technology in more places, identity in this new era is rapidly becoming a super-human problem, according to RSA. Paradoxically, even in this world where AI…",
    link: "https://www.helpnetsecurity.com/2023/08/01/identity-security-knowledge/",
    image_url: "https://img.helpnetsecurity.com/wp-content/uploads/2023/06/28143248/privacy1.jpg",
    publishedAt: "2023-08-01T03:30:09Z",
    content: "With exponential growth in the number of human and machine actors on the network and more sophisticated technology in more places, identity in this new era is rapidly becoming a super-human problem, … [+4105 chars]"
},
{
    id: 16,
    author: "BL Internet Desk",
    title: "Share Market Highlights: Sensex, Nifty close flat as caution over elevated valuations offsets IT uptick",
    description: "Share Market Highlights| Sensex, Nifty updates on 01 August 2023. Find here all the updates related to Sensex, Nifty, BSE, NSE, share prices and Indian stock markets. The Nifty 50 index settled 0.10% lower at 19,733.55, while the S&P BSE Sensex fell 0.10% to …",
    link: "https://www.thehindubusinessline.com/markets/stock-market-highlights-01-august-2023/article67143318.ece",
    image_url: "https://bl-i.thgim.com/public/incoming/ih1tq3/article67143314.ece/alternates/LANDSCAPE_1200/Stock%20Market%20Live%20Today%20-%20Share%20Market.jpg",
    publishedAt: "2023-08-01T03:07:34Z",
    content: "<li></li>\r\nAugust 01, 2023 16:44Rupee pares initial losses, settles 3 paise higher at 82.26 per US dollar\r\nRupee pared initial losses and settled for the day 3 paise higher at 82.26 (provisional) aga… [+58074 chars]"
}
];

const News = () => {
  const courseCard = ({item}) =>{
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage}
            source={{uri: item.image_url}}
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