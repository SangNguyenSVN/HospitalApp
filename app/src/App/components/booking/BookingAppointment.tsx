import { StyleSheet, Text, View, ScrollView, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import BookingAppointmentInfo from './BookingAppointmentInfo';
import PageHeaders from '../Shared/PageHeaders';
import DateTimeForm from '../Shared/DateTimeForm';
import ButtonSubmit from './ButtonSubmit';
import InformationForm from '../Shared/InformationForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const BookingAppointment = ({ hospitalInfo }: any) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const param = useRoute<any>().params;
  const [selectedDay, setSelectedDay] = useState([]);
  const [selectedHour, setSelectedHour] = useState([]);
  const [note, setNote] = useState<string>('');

  const handleFullnameChange = (name: string) => {
    setFullName(name);
  };
  const handleEmailChange = (email: string) => {
    setEmail(email);
  };
  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
  };
  const handleDaySelection = (day: any) => {
    setSelectedDay(day);
  };
  const handleHourSelection = (time: any) => {
    setSelectedHour(time);
  };

  const handleNoteChange = (text: string) => {
    setNote(text);
  };

  return (
    <View style={styles.container}>
      <PageHeaders title="Booking Appointment" back_icon={true} />

      <View style={styles.container_form}>
        <KeyboardAwareScrollView
          scrollEnabled={true}
          extraScrollHeight={100}>
          <View style={styles.viewItem}>
            <BookingAppointmentInfo hospitalInfo={param.hospitalInfo} />
            <InformationForm
              onFullnameChanged={handleFullnameChange}
              onChangePhoneNumber={handlePhoneChange}
              onEmailChanged={handleEmailChange}
            />
            <DateTimeForm
              onDaySelected={handleDaySelection}
              onHourSelected={handleHourSelection}
              onNoteChanged={handleNoteChange}
            />

          </View>
          <View style={styles.container_submit}>
          <ButtonSubmit
          fullname_Submit={fullName}
          email_Submit={email}
          phone_Submit={phone}
          hospitalInfo={param.hospitalInfo}
          selectedDay_Submit={selectedDay}
          selectedHour_Submit={selectedHour}
          note_Submit={note}
          title={'Submit'} />
          </View>
        
        </KeyboardAwareScrollView>
       
      </View>

    </View>
  )
}

export default BookingAppointment

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  container_form: {
    flex: 1,
  },
  container_submit:{
    flex: 1,
    padding: 10
  },
  viewItem: {
    marginHorizontal: 10,
  },

})