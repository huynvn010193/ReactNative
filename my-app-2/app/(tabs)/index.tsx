import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState<string>("react-native");
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "600" }}>
        {count} hello world
      </Text>
      <Button
        title='Increase'
        color='#007AFF'
        onPress={() => setCount(count + 1)}
      />
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
