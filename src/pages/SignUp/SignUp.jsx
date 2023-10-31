import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { 
    getFirestore, collection, onSnapshot,
    addDoc, doc, query, orderBy,serverTimestamp,
    updateDoc,getDoc
    } from "firebase/firestore";
import { View, Text, TextInput, Button, StyleSheet, inputAccessoryViewID } from 'react-native'



export const SignUp = () => {

    const inputAccessoryViewID = 'aboveKeyboard';
    const Navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const createUser = () => {
        createUserWithEmailAndPassword( getAuth(), firstName, LastName, email, password)
            .then((cred) => {
                console.log('user created', cred.user)
                // Navigate('/HomePage')
            })
            .catch((error) => {
                console.log('an error has occurred')
            })
    }



    return (
        <View>

            <Text
                style={styles.header}
            >Create Account
            </Text>

            <TextInput
                keyboardType="default"
                style={styles.inputStyle}
                onChangeText={setFirstName}
                value={firstName}
                placeholder={'First Name'}
            />

            <TextInput
                keyboardType="default"
                style={styles.inputStyle}
                onChangeText={setLastName}
                value={LastName}
                placeholder={'Last Name'}
            />

            <TextInput
                keyboardType="default"
                style={styles.inputStyle}
                onChangeText={setEmail}
                value={email}
                placeholder={'email'}
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    secureTextEntry={true}
                    keyboardType="default"
                    style={styles.inputStyle}
                    onChangeText={setPassword}
                    value={password}
                    placeholder={'password'}
                />
            </View>

            <View
                style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    color='cyan'
                    onPress={createUser}
                    title="Create Account"
                    accessibilityLabel="Create Account"
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        margin: 'auto',
        marginTop: '1rem',
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    inputStyle: {
        padding: 16,
        marginTop: 30,
        border: '1px solid black',
        borderRadius: '25px',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    inputStyle2: {
        padding: 16,
        marginTop: 30,
        border: '1px solid black',
        borderRadius: '25px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    passwordContainer: {
        width: '80%',
        margin: 'auto',
    },
    buttonContainer: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '50px',
        width: '50%',
        overflow:'hidden'
    },

})