import React, {useState} from 'react';
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

const tasks = new Array(10).fill({
  task: 'This is a task',
});

const CARD_WIDTH = 300;

const MonthView = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <CalendarComponent />
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
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => setIsModalShown(true)}>
            <View style={styles.taskCardWrapper}>
              <View style={styles.taskCard}>
                <Image source={require(`../assets/images/unchecked.png`)} />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {item.task}
                </Text>
                <Text style={{fontSize: 16}}>2nd Feb . 12 pm</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <DetailsPage
        isVisible={isModalShown}
        closeModal={() => {
          setIsModalShown(false);
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
    height: 68,
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
