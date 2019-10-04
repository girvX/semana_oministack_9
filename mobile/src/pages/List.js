import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, Text, Image, AsyncStorage, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techArray);
            
        })
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})