import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {TextInput} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateTask = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={{fontSize: 24}}>Create New Task</Text>
              <View
                style={{
                  width: 110,
                  height: 1,
                  backgroundColor: 'rgba(124, 135, 165, 0.598222)',
                  marginLeft: 11,
                }}
              />
            </View>
            <View style={styles.topicContainer}>
              <View style={{justifyContent: 'space-between'}}>
                <Text>Topic</Text>
                <TextInput
                  placeholder="Enter Topic"
                  placeholderTextColor="rgba(124, 135, 165, 0.598222)"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(124, 135, 165, 0.598222)',
                    width: 282,
                    paddingVertical: vs(11),
                  }}
                />
              </View>
            </View>
            <View style={styles.DescContainer}>
              <View style={{justifyContent: 'space-between'}}>
                <Text>Description</Text>
                <TextInput
                  placeholder="Write Description"
                  placeholderTextColor="rgba(124, 135, 165, 0.598222)"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(124, 135, 165, 0.598222)',
                    width: 282,
                    paddingVertical: vs(11),
                  }}
                />
              </View>
            </View>
            <View>
              <Button
                title={`${show ? 'Hide' : 'Show'} date`}
                onPress={() => setShow(!show)}
              />
              {show && (
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
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 336,
    height: 605,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(23),
    paddingVertical: vs(25),
  },
  topicContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  DescContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 45,
  },
});

export default CreateTask;
