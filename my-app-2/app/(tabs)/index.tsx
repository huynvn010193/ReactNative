import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HoiDanIT</Text>
      <Text style={styles.parent}>
        Parent
        <Text style={styles.child}>Child</Text>
      </Text>
      <Text style={styles.hello1}>Hello world 2</Text>
      <Text>Hello world 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  hello1: {
    color: "red",
    fontSize: 60,
    borderColor: "green",
    borderWidth: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
  },
  parent: {
    color: "green",
    fontSize: 60,
  },
  child: {
    color: "blue",
    fontSize: 30,
  },
});
