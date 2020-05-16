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

const tasks = new Array(10).fill({
  task: 'This is a task',
  time: '2nd Feb . 12 pm',
});

var swipeoutBtns = [
  {
    text: 'Button',
  },
];
const DailyView = () => {
  const [isModalShown, setIsModalShown] = useState(false);

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
            <TouchableOpacity onPress={() => setIsModalShown(true)}>
              <View style={styles.taskCardWrapper}>
                <View style={styles.taskCard}>
                  <Image source={require(`../assets/images/unchecked.png`)} />
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {item.task}
                  </Text>
                  <Text style={{fontSize: 16}}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Swipeout>
        )}
      />
      <DetailsPage
        isVisible={isModalShown}
        closeModal={() => {
          console.log('CLoing modal');
          setIsModalShown(false);
        }}
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
