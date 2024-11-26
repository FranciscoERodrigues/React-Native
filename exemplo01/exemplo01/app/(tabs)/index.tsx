import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://img.icons8.com/?size=100&id=qCyVlwoMbmZy&format=png&color=000000' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Francisco Rodrigues</Text>
      <Text style={styles.description}>
        Desenvolvedor de software apaixonado por tecnologia e inovação.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,

  },
  profileImage:{
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 25,
    color: '#666',
    textAlign: 'center',
  },
});
