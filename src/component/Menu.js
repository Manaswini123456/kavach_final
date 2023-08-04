import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Settings")}>
                <Image style={styles.iconstyle} source={require("../../assets/settingIcon.png")} />
                <Text style={styles.textstyle}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("News")}>
                <Image style={styles.iconstyle} source={require("../../assets/newsIcon.png")} />
                <Text style={styles.textstyle}>News</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Citizen")}>
                <Image style={styles.iconstyle} source={require("../../assets/citizenIcon.png")} />
                <Text style={styles.textstyle}>Citizen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Chief Contacts&Links")}>
                <Image style={styles.iconstyle} source={require("../../assets/linkIcon.png")} />
                <Text style={styles.textstyle}>Imp-Links</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("About")}>
                <Image style={styles.iconstyle} source={require("../../assets/aboutIcon.png")} />
                <Text style={styles.textstyle}>Check</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 15,
        paddingTop: 10,
        backgroundColor: "#f7f7f7",
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    textstyle: {
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 15,
        color: "#333",
    },
    iconstyle: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
});

export default Menu;
