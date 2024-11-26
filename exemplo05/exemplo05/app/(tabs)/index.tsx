import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
      "Então Jesus tornou a falar-lhes, dizendo: Eu sou a luz do mundo; quem me segue de modo algum andará em trevas, mas terá a luz da vida."
      </Text>
      <Image 
        source={{ uri: 'https://img.icons8.com/?size=100&id=105361&format=png&color=000000' }} 
        style={styles.authorImage} 
      />
      <Text style={styles.authorName}>- João 8:12 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#30c0c3',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
