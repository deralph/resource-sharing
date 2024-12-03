import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import Button from "../components/button";

const DetailScreen = ({ route }) => {
  const { book } = route.params; // Get the passed data

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: "5%" }}>
        <Text style={styles.heading}>Result For</Text>
        <Text style={styles.title}>{book.topic}</Text>

        <Image source={book.image} style={styles.image} />

        <Text style={styles.label}>Topic: {book.topic}</Text>

        <Text style={styles.label}>Department: {book.department}</Text>
        <Text style={styles.label}>Course Title: {book.courseTitle}</Text>
        <Text style={styles.label}>Description :</Text>
        <Text style={styles.description}>{book.description}</Text>

        <Button
          primaryBtnText={"Download File"}
          // onPrimaryBtnPress={handleSubmit}
          // secondaryBtnText1={"Already have an account?"}
          // secondaryBtnText2={"Sign In"}
          // onSecondaryBtnPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "left",
  },
  heading: {
    // color: "#000",
    fontSize: 20,
    marginBottom: 10,
  },
  title: {
    // color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    // color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    // color: "#fff",
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF8C00",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailScreen;
