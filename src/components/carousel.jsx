import React from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native-web";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";





export const Carousel = () => {


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First title',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second title',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third title',
        },
    ];



    const Item = ({ title }) => (
        <View style={styles.item}>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                style={{ height: '10rem', width: '100%', borderRadius: '25px' }}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>upcoming events nearby connections new features</Text>
            </View>
        </View>
    );





    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                horizontal
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop: '1rem',
        justifyContent: 'between',
    },
    item: {
        backgroundColor: 'pink',
        borderRadius: '25px',
        width: '80vw',
        marginVertical: 8,
        marginHorizontal: 10,
        position: 'relative'
    },
    titleContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1rem',
        left: 0,
        right: 0,
        textAlign: 'center',
        position: 'absolute',
        width: '80%'
    },
    title: {
        fontSize: 30,
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
        textShadow: '1px 1px 2px black'
    },

    description: {
        fontSize: 15,
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
        textShadow: '1px 1px 2px black'
    }
});