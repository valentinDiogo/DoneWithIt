import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

function ListingsScreen(props) {

    const listings = [
        {
            id: 1,
            title: "Blouson rouge à vendre",
            price: 100,
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: "Canapé en bon état",
            price: 650,
            image: require('../assets/couch.jpg')
        },
    ]

    return (
        <Screen style={styles.screen} backgroundColor={colors.light}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={item.price + "€"}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default ListingsScreen;