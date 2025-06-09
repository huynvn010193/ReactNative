import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello world Huy</Text>
      <StatusBar style='auto' /> */}
      <View style={styles.top}>
        <Text style={styles.Toptext}>Top Left</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  top: {
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: "pink",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  Toptext: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },
});
