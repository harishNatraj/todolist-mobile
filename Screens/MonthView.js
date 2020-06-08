/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CalendarComponent from '../Components/Calendar';
import DetailsPage from '../Components/DetailsPage';
import {s, vs} from 'react-native-size-matters';
import axios from 'axios';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';

var swipeoutBtns = [
  {
    text: 'Button',
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
  },
];

const CARD_WIDTH = 300;

const MonthView = () => {
  const [isModalShown, setIsModalShown] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setDate] = useState(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    getTasks();
  }, [selectedDate]);

  const getTasks = () => {
    axios
      .get(`http://localhost:8080/tasks?date=${selectedDate}`)
      .then(function(response) {
        if (Array.isArray(response.data.tasks)) {
          console.log(response.data.tasks);
          setTasks(response.data.tasks);
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  const onDayPress = day => {
    // setDate(moment(day).format('MMMM Do YYYY'));
    // console.log(moment(day).format('YYYY DD MM'));
    setDate(day.dateString);
    console.log(day);
    console.log(moment().format('YYYY-MM-DD'));
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <CalendarComponent onDayPress={onDayPress} />
            <View style={{alignItems: 'center'}}>
              <View style={{width: CARD_WIDTH, paddingVertical: vs(20)}}>
                <Text
                  style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
                  This Month
                </Text>
              </View>
            </View>
          </>
        )}
        data={tasks}
        keyExtractor={(item, index) => `${index}00`}
        renderItem={({item, index}) => {
          let _date = moment(item.remind_date).toDate();
          _date = _date.toISOString();
          return (
            <TouchableOpacity onPress={() => setIsModalShown(item)}>
              <View style={styles.taskCardWrapper}>
                <View style={styles.taskCard}>
                  <Image source={require(`../assets/images/unchecked.png`)} />
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: 16}}>
                    {moment(_date).format('MMMM Do YYYY, h:mm a')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {console.log(isModalShown ? isModalShown._id : '')}
      <DetailsPage
        isVisible={isModalShown ? true : false}
        data={isModalShown}
        closeModal={() => {
          axios
            .delete(`http://localhost:8080/task?id=${isModalShown._id}`)
            .then(response => {
              console.log(response);
            })
            .catch(err => console.log(err));
          setIsModalShown(null);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  taskCardWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: vs(10),
  },
  taskCard: {
    width: CARD_WIDTH,
    height: 85,
    backgroundColor: '#D6D6D6',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(18),
  },
});
export default MonthView;
