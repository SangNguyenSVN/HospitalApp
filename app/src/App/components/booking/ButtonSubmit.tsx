import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import Global_API from '../../Server/Global_API';
import { validateName, validateEmail, validateDate, validateTime, validatePhoneNumber } from '../../services/CheckForm'
import { useUser } from '@clerk/clerk-expo'
const ButtonSubmit = ({
    title, fullname_Submit, email_Submit, phone_Submit,
    selectedDay_Submit, selectedHour_Submit, note_Submit, hospitalInfo }: any) => {
    const { isLoaded, isSignedIn, user } = useUser();
    const data: any = {
        data: {
            Hospital_Infomation: hospitalInfo.id,
            UserName: fullname_Submit,
            Email: email_Submit,
            Phone: phone_Submit,
            Date: selectedDay_Submit,
            Time: selectedHour_Submit,
            Note: note_Submit,
        }
    }
    const onPress = () => {
        const isValidData = () => {
            const validations = [
                { key: 'UserName', validator: validateName },
                { key: 'Email', validator: validateEmail },
                { key: 'Phone', validator: validatePhoneNumber },
                { key: 'Date', validator: validateDate },
                { key: 'Time', validator: validateTime }
            ];

            for (const validation of validations) {
                const { key, validator } = validation;
                if (!validator(data.data[key])) {
                    console.log(`Invalid ${key}`);
                    Alert.alert(`Invalid ${key}`, '', [{
                        text: 'Cancel',
                        style: 'cancel',
                    }])
                    return false;
                }
            }
            return true;
        };
        // Sử dụng hàm isValidData để kiểm tra tính hợp lệ của dữ liệu
        // Cái này lấy trên mạng hehe
        if (isValidData()) {
            // Nếu dữ liệu hợp lệ, tiếp tục xử lý
            console.log('Data is valid:', data);
        } else {
            // Nếu dữ liệu không hợp lệ, xử lý lỗi hoặc thông báo cho người dùng
            console.log('Invalid data, please check.');
        }
    }
    return (
        <View style={styles.viewPress}>
            <Pressable onPress={onPress} style={styles.SubmitButton}>
                <Text style={styles.txtPress}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonSubmit

const styles = StyleSheet.create({
    viewPress: {
        flex: 1,
        padding: 1,
        justifyContent: 'flex-end'
    },
    SubmitButton: {
        width: '100%',
        backgroundColor: 'blue',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtPress: {
        color: 'white',
        fontSize: 17,
        padding: 15,
        letterSpacing: 1.4,
    }
})
