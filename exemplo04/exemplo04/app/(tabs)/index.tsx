import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground 
      source={{uri: 'https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg'}} 
      style={styles.fundo}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bem-vindo ao App!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente para melhor contraste
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
