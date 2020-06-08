import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {View, Text} from 'react-native';
import moment from 'moment';
const CalendarComponent = (props) => (
  <CalendarList
    horizontal={true}
    pagingEnabled={true}
    onDayPress={props.onDayPress}
    markedDates={{
      [new moment().format('YYYY-MM-DD')]: {
        activeOpacity: 0.9,
        disabled: false,
        disableTouchEvent: false,
        dotColor: 'red',
        // marked: true,
        selected: true,
        // selectedColor: 'pink',
      },
    }}
    theme={{
      calendarBackground: 'transparent',
      textDayFontWeight: '700',
      textDayHeaderFontSize: 14,
      textDayHeaderFontWeight: '700',
      textMonthFontSize: 20,
      textMonthFontWeight: '900',
    }}
  />
);

export default CalendarComponent;
