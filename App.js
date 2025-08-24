import React, { useState } from "react";
import { ImageBackground, Text, TextInput, View, StyleSheet } from 'react-native';
    
import bgImage from './assets/icon.png';

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToFahrenheit = (celsiusInput) => {
    setCelsius(celsiusInput);
    const value = parseFloat(celsiusInput);
    if (!isNaN(value)) {
      const result = (value * 9) / 5 + 32;
      setFahrenheit(result.toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const newLocal = "Enter \u00B0C Celcius";
  return (
    <ImageBackground source={bgImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.header}>Celsius to Fahrenheit</Text>
      <TextInput
        style={styles.input}
        placeholder={newLocal}
        keyboardType="numeric"
        value={celsius}
        onChangeText={convertToFahrenheit}
      />
      <Text style={styles.result}>
        {fahrenheit !== "" ? `${fahrenheit} \u00B0F` : "Enter a valid number"}
      </Text>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 1,
    padding: 40,
    backgroundColor: 'rgba(30,255,255,0.1)',
  },
  header: {
    marginTop: 10,
    height: 80,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    marginTop: 260,
    height: 50,
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 230, 20, 0.1)',
    textColor: 'rgba(0,0,0,0.9)',
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    color: 'rgba(0,0,0,0.9)',
  },
});
