import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableNativeFeedback,
    Platform
} from 'react-native';
import Colors from "../constants/Colors";

const MainButton = props => {
    let ButtonComponent = TouchableOpacity; // works in React if you name something with a capital can use 

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
        <ButtonComponent onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },

    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },

    buttonText: {
        color: 'white', 
        fontFamily: 'open-sans', 
        fontSize: 18
    }
});

export default MainButton; 