import React from "react";
import { View, StyleSheet } from 'react-native';

// allows you to keep styles and then overwrite them with the spread operator
const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6, 
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;