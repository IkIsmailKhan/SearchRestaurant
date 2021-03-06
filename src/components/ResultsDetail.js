import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: result.image_url }}
            />

            <Text style={styles.name}>{result.name}</Text>

            <Text style={styles.rating}>{result.rating} Stars , {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 300,
        borderRadius: 10,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    rating: {
        fontSize: 14,
    },
    container: {
        marginLeft: 15,
    }
})

export default ResultsDetail;