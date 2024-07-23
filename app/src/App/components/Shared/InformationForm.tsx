import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useUser } from '@clerk/clerk-expo'

const InformationForm = ({ onFullnameChanged, onEmailChanged, onChangePhoneNumber }: any) => {
    const { isLoaded, isSignedIn, user } = useUser();
    const [fullname, setFullname] = useState<string>(user?.fullName || '');
    const [email, setEmail] = useState<string>(user?.primaryEmailAddress?.emailAddress || '');
    const [phoneNumber, setPhonenumber] = useState<string>();
    useEffect(() => {
        // sử dụng dữ liệu từ user đã đang nhập trước đó 
        // truyền dữ liệu vào textinput (có thể xóa và sửa lại dữ liệu)
        // truyền dữ liệu sang appointment bàng prop
        if (user?.fullName && user?.primaryEmailAddress?.emailAddress) {
            setFullname(user.fullName);
            setEmail(user.primaryEmailAddress.emailAddress);
            onFullnameChanged(fullname);
            onEmailChanged(email);
        }
    }, [user]);

    const handleFullnameChange = (fullnameChange: string) => {
        setFullname(fullnameChange);
        onFullnameChanged(fullnameChange);
    };
    const handlePhonenumberChange = (phonenumberChange: string) => {
        setPhonenumber(phonenumberChange);
        onChangePhoneNumber(phonenumberChange);
    };

    return (
        <View style={styles.container}>
            <View style={styles.viewItem_Input}>
                <SubHeading title={'Fullname'} />
                <TextInput
                    style={styles.item_Input}
                    value={fullname}
                    onChangeText={handleFullnameChange}
                >
                </TextInput>
            </View>
            <View style={styles.viewItem_Input}>
                <SubHeading title={'Email'} />
                <Text style={styles.item_Input}>
                    {email}
                </Text>
            </View>
            <View>
                <SubHeading title={'Phone'} />
                <TextInput
                    style={styles.item_Input}
                    value={phoneNumber}
                    onChangeText={handlePhonenumberChange}
                ></TextInput>
            </View>
        </View>
    )
}

export default InformationForm

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    viewItem_Input: {


    },
    item_Input: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        justifyContent: 'center',
        fontSize: 20
    },
})