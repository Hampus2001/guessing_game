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
      setCount(0);
    } else {
      if (count < randomNumber) {
        setAnswer("Wrong! To low!");
        setCount(0);
      } else if (count > randomNumber) {
        setAnswer("Wrong! To high!");
        setCount(0);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>THE GUESSING GAME</Text>

      <Text style={styles.h2}>Guess a number...</Text>
      <View style={styles.selectNumberBox}>
        <TextInput
          placeholder="Type number here"
          style={styles.count}
          onChangeText={(text) => setCount(Number(text))}
          keyboardType="numeric"
        />
      </View>
      <Button
        style={styles.inputStyle}
        title="Click to Guess!"
        onPress={() => makeAGuess()}
      />
      {answer != "" && (
        <>
          <Text
            style={
              answer == "Correct!" ? styles.correctAnswer : styles.wrongAnswer
            }
          >
            {answer}
          </Text>

          <Text
            style={styles.totalGuesses}
          >{`total guesses: ${totalGuesses}`}</Text>
          <Button
            title="Generate new number"
            color="gray"
            onPress={() => generateNewNumber()}
          />
        </>
      )}
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

  h2: {
    fontSize: 24,
  },

  count: {
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#e0f7fa",
    width: "200",
    padding: 16,
    borderRadius: 100,
  },

  inputStyle: {
    padding: 16,
    backgroundColor: "red",
  },

  totalGuesses: {
    backgroundColor: "coral",
    width: 200,
    textAlign: "center",
    padding: 16,
    borderRadius: 100,
  },

  correctAnswer: {
    padding: 16,
    textAlign: "center",
    borderRadius: 100,
    width: 200,
    backgroundColor: "green",
    color: "white",
  },
  wrongAnswer: {
    padding: 16,
    textAlign: "center",
    borderRadius: 100,
    width: 200,
    backgroundColor: "red",
    color: "white",
  },
});
