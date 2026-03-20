import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE TO-DO LIST</Text>

      <View style={styles.card}>
        <Text style={styles.row}>Wash the Dishes</Text>
        <Text style={styles.row}>Do homework</Text>
        <Text style={styles.row}>Finish Assignment Work</Text>
        <Text style={styles.row}>Walk the dog</Text>
        <Text style={styles.row}>Complete the quiz</Text>
      </View>

      <Text style={styles.newToDo}>Add New To-Do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    paddingTop: 60,
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

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 10,
  },

  row: {
    fontSize: 16,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    color: "#444",
  },
  newToDo: {
    fontsize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#1c95e6",
    margin: 20,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
