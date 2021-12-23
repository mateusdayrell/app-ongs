import React from 'react'
import { View, FlatList,  Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {
    const navigation = useNavigation()

    function navigationToDetail() {
        navigation.navigate('Detail')
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo!</Text>

            <FlatList 
                data={[1,2,3]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>Ong:</Text>
                    <Text style={styles.incidentValue}>CAA</Text>

                    <Text style={styles.incidentProperty}>Caso</Text>
                    <Text style={styles.incidentValue}>Descrição do caso</Text>

                    <Text style={styles.incidentProperty}>Valor</Text>
                    <Text style={styles.incidentValue}>R$ 100,00</Text>
                    
                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={navigationToDetail}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text> 
                        <Feather name='arrow-right' size={16} color='#e02041' />
                    </TouchableOpacity>
                </View>
                )}
            />

        </View> 
    )
} 