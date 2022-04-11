import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({ children, style, backgroundColor }) {
    return (
        <SafeAreaView style={[styles.screen, {
            backgroundColor
        }]}>
            <View style={style}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;