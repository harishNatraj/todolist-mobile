import React from 'react';
import {
  View,
  Platform,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {BlurView} from '@react-native-community/blur';
import {vs, s} from 'react-native-size-matters';

const iOS = Platform.OS === 'ios';

const DatePickerIos = ({showDateTime, hide}) => {
  return (
    <Modal visible={showDateTime}>
      <View style={styles.dateTimePickerContainer}>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={50}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.dateTimePicker}>
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={new Date()}
            mode="datetime"
            is24Hour={true}
            display="default"
            onChange={(ev, date) => {
              console.log(date);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={hide}>
              <View
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: '#5B3E96',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>Confirm</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={hide}>
              <View
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Close</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const DatePickerAndroid = ({showDateTime, hide}) => {
  if (!showDateTime) {
    return null;
  }
  return (
    <DateTimePicker
      testID="dateTimePicker"
      timeZoneOffsetInMinutes={0}
      value={new Date()}
      mode="datetime"
      is24Hour={true}
      display="default"
      onChange={(ev, date) => {
        console.log(date);
        hide();
      }}
    />
  );
};

const DateTime = ({showDateTime, hide}) => {
  return iOS ? (
    <DatePickerIos showDateTime={showDateTime} hide={hide} />
  ) : (
    <DatePickerAndroid showDateTime={showDateTime} hide={hide} />
  );
};

export default DateTime;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 336,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 3,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(23),
    paddingVertical: vs(20),
  },
  topicContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  DescContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 10,
  },
  CreateTask: {
    width: 336,
    height: 50,
    backgroundColor: '#5B3E96',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTimePickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTimePicker: {
    backgroundColor: 'white',
    borderRadius: 3,
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
