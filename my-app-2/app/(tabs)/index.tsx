import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [students, setStudents] = useState([
    { id: 1, name: "Edric1", age: 20 },
    { id: 2, name: "Edric2", age: 21 },
    { id: 3, name: "Edric3", age: 22 },
    { id: 4, name: "Edric4", age: 23 },
    { id: 5, name: "Edric5", age: 24 },
    { id: 6, name: "Edric6", age: 25 },
    { id: 7, name: "Edric7", age: 26 },
    { id: 8, name: "Edric8", age: 27 },
    { id: 9, name: "Edric9", age: 28 },
  ]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Helloworld</Text>
      <ScrollView>
        {students.map((student) => (
          <View
            key={student.id}
            style={{ padding: 30, backgroundColor: "pink", marginBottom: 30 }}
          >
            <Text>{student.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
