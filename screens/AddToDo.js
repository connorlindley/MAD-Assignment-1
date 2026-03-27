import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddToDo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Screen</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.itemBox}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={styles.item}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBox}>
          <Ionicons
            name="save-outline"
            size={20}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={styles.item}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 70,
    left: 20,
    right: 20,
  },
  itemBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c95e6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 100,
    justifyContent: "center",
  },
  item: {
    fontSize: 18,
    color: "#ffffff",
    marginLeft: 10,
  },
  icon: {
    // optional: adjust icon position if needed
  },
});

export default AddToDo;
