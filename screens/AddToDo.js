import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddToDo = ({ navigation }) => {
  const [newTodo, setNewTodo] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Screen</Text>
      <Text style={styles.textTitles}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new to-do..."
        placeholderTextColor="#999"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Text style={styles.textTitles}>Description</Text>
      <TextInput
        style={styles.notesInput}
        placeholder="Additional notes..."
        placeholderTextColor="#999"
        value={notes}
        onChangeText={setNotes}
        multiline={true}
      />

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.itemBox}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="arrow-back" size={20} color="#ffffff" />
          <Text style={styles.item}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemBox}
          onPress={() => console.log("Saved:", newTodo, notes)}
        >
          <Ionicons name="save-outline" size={20} color="#ffffff" />
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
  textTitles: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  notesInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 14,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
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
});

export default AddToDo;
