import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Name: {name}</Text>
        <TextInput
          multiline
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
          }}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Age: {age}</Text>
        <TextInput
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
          }}
          onChangeText={(text) => setAge(+text)}
          keyboardType='numeric'
          maxLength={2}
        />
      </View>

      {/* <Button
        title='Increase'
        color='#007AFF'
        onPress={() => setCount(count + 1)}
      /> */}
      <Text style={{ fontSize: 40, fontWeight: "600" }}>
        {count} hello world
      </Text>
      <TouchableOpacity
        style={styles.styleButton}
        onPress={() => setCount(count + 1)}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Increase
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  styleButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 26,
    padding: 20,
  },
});
