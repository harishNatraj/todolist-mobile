import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import MonthView from './MonthView';
import DailyView from './DailyView';

function Home() {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <>
      <View style={{backgroundColor: '#140A26', flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{alignItems: 'center', paddingBottom: 10}}>
            <Text style={styles.title}>TO-DO</Text>
            <SegmentedControlTab
              values={['Monthly', 'Today']}
              tabsContainerStyle={styles.tabsContainerStyle}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              tabTextStyle={styles.tabTextStyle}
              borderRadius={100}
              selectedIndex={selectedIndex}
              onTabPress={setIndex}
            />
          </View>
          {selectedIndex === 0 ? <MonthView /> : <DailyView />}
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tabsContainerStyle: {
    width: 285,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
  tabStyle: {
    borderColor: 'white',
  },
  activeTabStyle: {
    backgroundColor: '#5B3E96',
    borderColor: '#5B3E96',
  },
  tabTextStyle: {
    color: 'black',
    fontSize: 18,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    paddingBottom: 19,
  },
});
export default Home;
