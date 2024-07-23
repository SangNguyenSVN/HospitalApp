import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { validateName, validateEmail } from '../../services/CheckForm'
const ButtonRegister = ({title, name, email, password }: any) => {
    const data: any = {
        data: {
            usename: name,
            email: email,
            password: password
        }
    }
    const onPress = () => {
        const isValidData = () => {
            const validations = [
                { key: 'UserName', validator: validateName },
                { key: 'Email', validator: validateEmail },
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
        <TouchableOpacity onPress={onPress} style={styles.btnRegister}>
            <Text style={styles.txtRegister}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonRegister

const styles = StyleSheet.create({
    btnRegister: {
        width: '50%',
        backgroundColor: 'blue',
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    txtRegister: {
        color: 'white',
        fontSize: 17,
        padding: 15,
        letterSpacing: 1.4,
    }
})