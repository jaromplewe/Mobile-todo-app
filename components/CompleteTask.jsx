import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CompleteTask = () => {

    const [showCheck, setShowCheck] = useState(false);

    const toggleCheck = () => {
        setShowCheck(prevShowCheck => !prevShowCheck);
    }

    const renderCheck = () => {
        return (
            <Image 
                source={require('../assets/check.png')}
                style={styles.checkmark}
            />
        )
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.checkbox}
                onPress={() => toggleCheck()}
            >
                {showCheck ? renderCheck() : null}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 24,
        height: 24,
        borderColor: '#55BCF6',
        borderWidth: 2,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    checkmark: {
        width: 20,
        height: 20,
        borderRadius: 3,
        color: 'green',
    }
})

export default CompleteTask;
