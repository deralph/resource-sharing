import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import Button from "../components/button";

import firebase from "firebase/app";
import { useNavigation } from "@react-navigation/native";
// import "firebase/storage";

const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [document, setDocument] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");

  const navigation = useNavigation();

  // Pick an image from the device
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  // Pick a document from the device
  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (result.type === "success") {
      setDocument(result.uri);
    }
  };

  // Upload file to Firebase
  const uploadFile = async (uri, fileType) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.substring(uri.lastIndexOf("/") + 1);
    const ref = firebase.storage().ref().child(`${fileType}/${filename}`);
    const snapshot = await ref.put(blob);
    return await snapshot.ref.getDownloadURL();
  };

  // Handle form submission
  const handleSubmit = async () => {
    setUploading(true);
    setStatus("Uploading...");

    try {
      const imageUrl = image ? await uploadFile(image, "images") : null;
      const documentUrl = document
        ? await uploadFile(document, "documents")
        : null;

      // Store form data in Firebase Firestore (or Realtime Database)
      const formData = {
        title,
        department,
        description,
        imageUrl,
        documentUrl,
      };

      // You can add Firestore or Realtime Database logic here to save formData

      setStatus("Upload successful!");
    } catch (error) {
      console.error(error);
      setStatus("Upload failed!");
    }

    setUploading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: "5%" }}>
        <Text style={styles.label}>Title *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Department *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Department"
          value={department}
          onChangeText={setDepartment}
        />

        <Text style={styles.label}>Description *</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Text style={styles.label}>Display Picture *</Text>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text>Select Picture</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.previewImage} />}

        <Text style={styles.label}>Upload Document *</Text>
        <TouchableOpacity onPress={pickDocument} style={styles.button}>
          <Text>Select Document</Text>
        </TouchableOpacity>
        {document && <Text>{document.split("/").pop()}</Text>}

        <Button
          primaryBtnText={"Upload"}
          onPrimaryBtnPress={handleSubmit}
          // secondaryBtnText1={"Already have an account?"}
          // secondaryBtnText2={"Sign In"}
          onSecondaryBtnPress={() => navigation.navigate("SignIn")}
          disabled={uploading}
        />

        {uploading && <ActivityIndicator size="large" color="#0000ff" />}
        <Text>{status}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  textarea: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    height: 100,
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  previewImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default FormComponent;
