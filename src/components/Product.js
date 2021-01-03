import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card } from './Card';

export function Product({ product, onPress }) {
    return (
        <Card style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={{ uri: product.imageUrl }} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 20
    },
    image: {
        height: 120,
        width: 200,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginVertical: 10,
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878'
    }
})