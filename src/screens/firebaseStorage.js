// firebaseStorage.js

// Replace the following import with the appropriate Firebase Storage SDK import
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const storage = getStorage(); // Initialize the Firebase Storage

// Function to upload an image to Firebase Storage
export const uploadImage = async (imageUri, userId) => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const imageName = `${userId}-${uuidv4()}.jpg`; // Generate a unique image name
    const imageRef = ref(storage, `images/${imageName}`);
    await uploadBytes(imageRef, blob);
    const downloadUrl = await getDownloadURL(imageRef);
    return downloadUrl;
  } catch (error) {
    throw new Error("Error uploading image:", error);
  }
};
