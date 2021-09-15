import React from 'react';

import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

import StyledButton from '../StyledButton';

export default function CarItem(props) {


    const { name, tagline, image, taglineCTA } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                style={styles.image}
                source={image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}{" "}
                    <Text style={styles.subTitlesCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content="custom order"
                    onPress={() => {
                        console.warn("custom order was pressed");
                    }}
                />
                <StyledButton
                    type="secondary"
                    content="existing Inventory"
                    onPress={() => {
                        console.warn("existing inventory was pressed");
                    }}
                />
            </View>

        </View>

    );
}