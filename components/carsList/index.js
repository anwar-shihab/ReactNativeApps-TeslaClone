import React from 'react';

import { View, Text, FlatList, Dimensions, } from 'react-native';
import car from './car';
import CarItem from '../carItem';

import styles from './styles';


export default function CarsList() {
    return (
        <View style={styles.container}>
            <FlatList

                data={car}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}