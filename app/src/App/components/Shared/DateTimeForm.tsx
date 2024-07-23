import { FlatList, StyleSheet, Text, View, Button, Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import { getDays, getTimes } from '../../services/DayTime'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useUser } from '@clerk/clerk-expo'

const DateTimeForm = ({ onDaySelected, onHourSelected, onNoteChanged }: any) => {
  // const { isLoaded, isSignedIn, user } = useUser();
  // const [fullname, setFullname] = useState<string>(user?.fullName || '');
  // const [email, setEmail] = useState<string>(user?.primaryEmailAddress?.emailAddress || '');
  // const [phoneNumber, setPhonenumber] = useState<string>();
  const [nextSevenDays, setNextSevenDays] = useState([]);
  const [hourOfDay, setHourOfDay] = useState([]);
  const [selectedDay, setSelectedDay] = useState<[] | null>();
  const [selectedHour, setSelectedHour] = useState<[] | null>();
  const [note, setNote] = useState<string>('');
  const [extraScrollHeight, setExtraScrollHeight] = useState(0);

  useEffect(() => {
    // sử dụng dữ liệu từ user đã đang nhập trước đó 
    // truyền dữ liệu vào textinput (có thể xóa và sửa lại dữ liệu)
    // truyền dữ liệu sang appointment bàng prop
    // if (user?.fullName && user?.primaryEmailAddress?.emailAddress ) {
    //   setFullname(user.fullName);
    //   setEmail(user.primaryEmailAddress.emailAddress);
    //   onFullnameChanged(fullname);
    //   onEmailChanged(email);
    // }
    const times: any = getTimes();
    const days: any = getDays();
    setNextSevenDays(days);
    setHourOfDay(times);
  }, []);

  // các handle lấy dữ liệu từ form và chuyển qua file Appointment bằng các Prop 
  const handleNoteChange = (note: string) => {
    setNote(note);
    onNoteChanged(note);
  };

  // const handleFullnameChange = (fullnameChange: string) => {
  //   setFullname(fullnameChange);
  //   onFullnameChanged(fullnameChange);
  // };
  // const handlePhonenumberChange = (phonenumberChange: string) => {
  //   setPhonenumber(phonenumberChange);
  //   onChangePhoneNumber(phonenumberChange);
  // };
  // sự kiên khi nhấn vào item ngày/ giờ 
  // => 1 lấy dữ liệu từ item. 
  // => 2 bỏ chọn và trả về null (không có giá trị)
  const toggleDaySelection = (item: any) => {
    if (selectedDay === item.date) {
      setSelectedDay(null);
      onDaySelected(null);
    } else {
      setSelectedDay(item.date);
      onDaySelected(item.date);
    }
  };
  const toggleHourSelection = (item: any) => {
    if (selectedHour === item.time) {
      setSelectedHour(null);
      onHourSelected(null);
    } else {
      setSelectedHour(item.time);
      onHourSelected(item.time);
    }
  };

  // cái này chắc ko cần giải thích hen 
  const renderItemDay = ({ item }: any) => (
    <View style={styles.itemListView}>
      <TouchableOpacity
        style={[selectedDay === item.date ? styles.btnItem_Selected : styles.btnItem]}
        onPress={() => toggleDaySelection(item)}>
        <Text style={styles.days}>{item.day}</Text>
        <Text style={styles.dates}>{item.formattedDate}</Text>
      </TouchableOpacity>
    </View>
  )
  const renderItemTime = ({ item }: any) => (
    <View style={styles.itemListView}>
      <TouchableOpacity
        style={[selectedHour === item.time ? styles.btnItem_Selected : styles.btnItem]}
        onPress={() => toggleHourSelection(item)}>
        <Text style={styles.times}>{item.time}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View>
      <View style={styles.viewItem_Form}>
        <SubHeading title={'DAY'} />
        <FlatList
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          data={nextSevenDays}
          renderItem={renderItemDay} />
      </View>
      <View style={styles.viewItem_Form}>
        <SubHeading title={'TIME'} />
        <FlatList
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          data={hourOfDay}
          renderItem={renderItemTime} />
      </View>
      <View >
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <SubHeading title={'NOTE'} />
          <Button title="✔️" onPress={Keyboard.dismiss} />
        </View>
        <View style={styles.txtInput}>
          <TextInput
            multiline
            numberOfLines={3}
            placeholder='Write Notes Here'
            lineBreakStrategyIOS='push-out'
            placeholderTextColor={'gray'}
            value={note}
            onChangeText={handleNoteChange}
            style={styles.txt_Note}
            showSoftInputOnFocus
          />
        </View>

        {/* <View style={styles.txtInput}>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder='Write Notes Here'
          lineBreakStrategyIOS='push-out'
          placeholderTextColor={'gray'}
          value={text}
          onChangeText={setText}
          style={styles.txt_Note} />
      </View> */}
      </View>
    </View>
  )
}

export default DateTimeForm

const styles = StyleSheet.create({
  viewItem_Form: {
    marginVertical: 10,
  },
  itemListView: {
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    backgroundColor: 'white'
  },
  btnItem_Selected: {
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10,
    backgroundColor: '#00B2BF'
  },
  days: {
    fontSize: 17,
    alignSelf: 'center'
  },
  dates: {
    fontSize: 20,
  },
  times: {
    alignSelf: 'center',
    fontSize: 20,
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
  btnItem: {

  },
  inner: {
    justifyContent: 'center',
  },
  txtInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    height: 100

  },
  txt_Note: {
    fontSize: 25,
    color: 'black',
    width: '100%',
    textAlignVertical: 'top',

  }


})