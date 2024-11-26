import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://img.icons8.com/?size=100&id=G8JeSfrJi0mh&format=png&color=000000' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Celular</Text>
      <Text style={styles.productPrice}>R$ 2500,00</Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    textShadowColor: 'black', 
    borderColor:'solid',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 15,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
});