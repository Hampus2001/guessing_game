import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Keyboard,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100)
  );

  function generateNewNumber() {
    setRandomNumber(Math.floor(Math.random() * 100));
    setTotalGuesses(0);
  }

  function makeAGuess() {
    setTotalGuesses(totalGuesses + 1);
    Keyboard.dismiss();
    if (count == randomNumber) {
      setAnswer("Correct!");
    } else {
      if (count < randomNumber) {
        setAnswer("Wrong! To low!");
      } else if (count > randomNumber) {
        setAnswer("Wrong! To high!");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>THE GUESSING GAME</Text>
      <Button
        style={styles.button}
        title="Generate new number"
        color="red"
        onPress={() => generateNewNumber()}
      />
      <Text>{`total guesses: ${totalGuesses}`}</Text>
      <Text>Guess a number...</Text>
      <View style={styles.selectNumberBox}>
        <TextInput
          style={styles.count}
          onChangeText={(text) => setCount(Number(text))}
          keyboardType="numeric"
        />
      </View>
      <Button title="Guess!" onPress={() => makeAGuess()} />
      <Text>{answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
    gap: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
  },

  count: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "light blue",
  },
});
