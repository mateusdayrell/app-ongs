import React from 'react'
import { TouchableOpacity, View, Image, Text, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'


import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail () {
    const navigation = useNavigation()
    const message = 'Ola CAA, gostaria de ajudar no caso "atropelada" com o valor de R$ 100,00'

    function navigate() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: atropelada',
            recipients: ['ongcaa@emial.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5538998053356?&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigate}>
                    <Feather name='arrow-left' size={28} color='#e02041' />    
                </TouchableOpacity> 
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>Ong:</Text>
                <Text style={styles.incidentValue}>ONG</Text>

                <Text style={styles.incidentProperty}>Caso</Text>
                <Text style={styles.incidentValue}>Descrição do caso</Text>

                <Text style={styles.incidentProperty}>Valor</Text>
                <Text style={styles.incidentValue}>R$ 100,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroeTitle}>Salve o dia!</Text>
                <Text style={styles.heroeTitle}>Seja o heroi desse caso.</Text>

                <Text style={styles.heroeDescription}>Entre em contato!</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </View>
    )
}