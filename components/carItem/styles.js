import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({

    carContainer: {
        width: "100%",
        height: Dimensions.get('window').height,
    },

    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
    },

    title: {
        fontSize: 40,
        fontWeight: "500",
    },

    subTitles: {
        fontSize: 16,
        color: '#5c5e62',
    },

    subTitlesCTA: {
        textDecorationLine: "underline",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: 'absolute',

    },

    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }


});