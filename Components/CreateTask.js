import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import moment from 'moment';

import {s, vs} from 'react-native-size-matters';
import {TextInput, TouchableOpacity} from 'react-native';

import DateTime from './DateTime';

const CreateTask = () => {
  const [show, setShow] = useState(false);
  const [isVisibile, setVisibility] = useState(false);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#140A26'}}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <View>
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
                {/* <Button
                title="Select Date & Time"
                onPress={() => setShow(true)}
              /> */}
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => setShow(true)}>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingVertical: vs(15),
                    }}>
                    <Text style={{fontSize: 20, marginRight: 40}}>{moment().format('DD')}</Text>
                    <Text style={{fontSize: 20, marginRight: 40}}>{moment().format('ddd')}</Text>
                    <Text style={{fontSize: 20, marginRight: 15}}>
                      {moment().format('YYYY')}
                    </Text>
                  </View>
                </TouchableOpacity>
                <DateTime showDateTime={show} hide={() => setShow(false)} />
              </View>
            </View>
            <View>
              <View style={styles.CreateTask}>
                <Text style={{color: 'white'}}>Create</Text>
              </View>
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
    marginBottom: s(20),
  },
  DescContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: s(20),
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

export default CreateTask;
