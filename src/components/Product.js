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
        height: 260,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16
    },
    infoContainer: {
        padding: 16
    }
})