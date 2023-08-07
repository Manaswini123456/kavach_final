import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "./firebaseStorage"; // Replace with the correct path to your firebaseStorage.js file

const UserData = () => {
  const [userData, setUserData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const auth = getAuth();
  const db = getFirestore();
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    if (userId) {
      fetchUserDataFromFirebase();
    }
  }, [userId]);

  useEffect(() => {
    if (userData?.photoUrl) {
      setProfileImage(userData.photoUrl);
    }
  }, [userData]);

  const fetchUserDataFromFirebase = async () => {
    try {
      const userRef = doc(collection(db, "users"), userId);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        setUserData(userSnapshot.data());
      } else {
        console.log("User data not found.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleReport = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedUserData = {
        name: name || userData?.name,
        aadharCard: aadharCard || userData?.aadharCard,
        dateOfBirth: dateOfBirth || userData?.dateOfBirth,
        gender: gender || userData?.gender,
        age: age || userData?.age,
        phone: phone || userData?.phone,
        address: address || userData?.address,
      };
      const userRef = doc(collection(db, "users"), userId);
      await setDoc(userRef, updatedUserData);
      console.log("User profile updated successfully.");
      setUserData((prevUserData) => ({ ...prevUserData, ...updatedUserData }));
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handlePickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access media library was denied.");
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const handleUploadImage = async () => {
    if (!profileImage) {
      return;
    }
    try {
      const imageUrl = await uploadImage(profileImage, userId); // Replace with your Firebase Storage upload function
      const userRef = doc(collection(db, "users"), userId);
      await setDoc(userRef, { photoUrl: imageUrl }, { merge: true });
      console.log("Profile image uploaded successfully.");
      setUserData((prevUserData) => ({ ...prevUserData, photoUrl: imageUrl }));
    } catch (error) {
      console.error("Error uploading profile image:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{ uri: profileImage }} />
        <View style={styles.details}>
          {userData && (
            <>
              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.contact}>Phone: {userData.phone}</Text>
              <Text style={styles.contact}>Email: {auth.currentUser?.email}</Text>
              <Text style={styles.contact}>Aadhar Card: {userData.aadharCard}</Text>
              <Text style={styles.contact}>Date of Birth: {userData.dateOfBirth}</Text>
              <Text style={styles.contact}>Gender: {userData.gender}</Text>
              <Text style={styles.contact}>Age: {userData.age}</Text>
              <Text style={styles.contact}>Address: {userData.address}</Text>
            </>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updateProfileButton} onPress={handleReport}>
        <Text style={styles.updateProfileButtonText}>Update Profile</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ScrollView contentContainerStyle={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Profile</Text>

            <TouchableOpacity
              style={styles.profileImageContainer}
              onPress={handlePickImage}
            >
              {profileImage ? (
                <Image style={styles.profileImage} source={{ uri: profileImage }} />
              ) : (
                <Text style={styles.profileImageText}>Pick a Profile Image</Text>
              )}
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Name"
            />

            <TextInput
              style={styles.input}
              value={aadharCard}
              onChangeText={(text) => setAadharCard(text)}
              placeholder="Aadhar Card"
              keyboardType="numeric"
              maxLength={12}
            />

            <TextInput
              style={styles.input}
              value={dateOfBirth}
              onChangeText={(text) => setDateOfBirth(text)}
              placeholder="Date of Birth"
            />

            <TextInput
              style={styles.input}
              value={gender}
              onChangeText={(text) => setGender(text)}
              placeholder="Gender"
            />

            <TextInput
              style={styles.input}
              value={age}
              onChangeText={(text) => setAge(text)}
              placeholder="Age"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone"
              keyboardType="phone-pad"
            />

            <TextInput
              style={styles.input}
              value={address}
              onChangeText={(text) => setAddress(text)}
              placeholder="Address"
              multiline={true}
              numberOfLines={4}
            />

            <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  mainContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  details: {
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contact: {
    fontSize: 16,
    marginBottom: 5,
  },
  logoutButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    zIndex: 1,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  updateProfileButton: {
    position: "absolute",
    bottom: 16,
    right: 120,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    zIndex: 1,
  },
  updateProfileButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
  },
  updateButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileImageText: {
    fontSize: 16,
    color: "#007BFF",
  },
});

export default UserData;
