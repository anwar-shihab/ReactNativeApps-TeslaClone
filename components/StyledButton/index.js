import React from 'react';

import { View, Text, Pressable, } from 'react-native';
import styles from './styles';

export default function StyledButton(props) {

    // const type = props.type;
    // const onPress = props.onPress;

    const { type, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#ffffffa6';
    const textColor = type === 'primary' ? '#ffffffa6' : '#171A20CC';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => { onPress() }}
            >
                <Text style={[styles.text, { color: textColor }]}>{props.content}</Text>
            </Pressable>
        </View>
    );
}