import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import DetailsPage from '../Components/DetailsPage';
import {s, vs} from 'react-native-size-matters';
import Swipeout from 'react-native-swipeout';
import axios from 'axios';
import moment from 'moment';

var swipeoutBtns = [
  {
    text: 'Button',
  },
];
const DailyView = () => {
  const [isModalShown, setIsModalShown] = useState(null);
  const [tasks, setTasks] = useState([]);

  axios
    .get('http://localhost:8080/tasks?today=true')
    .then(function(response) {
      if (Array.isArray(response.data.tasks)) {
        setTasks(response.data.tasks);
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{alignItems: 'center', paddingVertical: vs(10)}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>
              2nd Feb
            </Text>
          </View>
        )}
        data={tasks}
        keyExtractor={(item, index) => `${index}00`}
        renderItem={({item, index}) => (
          <Swipeout right={swipeoutBtns} backgroundColor="#140A26">
            <TouchableOpacity onPress={() => setIsModalShown(item)}>
              <View style={styles.taskCardWrapper}>
                <View style={styles.taskCard}>
                  <Image source={require(`../assets/images/unchecked.png`)} />
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: 16}}>
                    {moment(item.remind_date).format('MMMM Do YY, h:mm a')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Swipeout>
        )}
      />
      <DetailsPage
        isVisible={isModalShown ? true : false}
        data={isModalShown}
        closeModal={() => setIsModalShown(null)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    width: 300,
    height: 68,
    backgroundColor: '#D6D6D6',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(18),
  },
  taskCardWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: vs(12),
  },
});
export default DailyView;
