import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface ITodo {
  id: number;
  name: string;
}

export default function HomeScreen() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInterger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi input todo", "Todo không được để trống", [
        { text: "Xác nhận", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInterger(2, 2000000), name: todo }]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const newList = listTodo.filter((item) => item.id !== id);
    setListTodo(newList);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.header}>React</Text>
        <View style={styles.body}>
          <TextInput
            style={styles.todo_input}
            onChangeText={(value) => setTodo(value)}
            value={todo}
          ></TextInput>
          {/* <Button title='Add Todo' /> */}
          <Pressable style={styles.button_add} onPress={handleAddTodo}>
            <Text style={{ color: "white" }}>ADD TODO</Text>
          </Pressable>
        </View>
        <View style={styles.body}>
          <Text>List TODO: {todo}</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={listTodo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    deleteTodo(item.id);
                  }}
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                >
                  <Text style={styles.todo_item}>{item.name}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    // paddingHorizontal: 20,
  },
  todo_input: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 15,
    margin: 15,
    marginTop: 15,
  },
  button_add: {
    backgroundColor: "dodgerblue",
    padding: 10,
    margin: 15,
    color: "white",
    textAlign: "center",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  todo_item: {
    fontSize: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    padding: 10,
  },
});
