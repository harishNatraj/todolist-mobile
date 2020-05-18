import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {s, vs} from 'react-native-size-matters';

const DetailsPage = ({isVisible, data, closeModal}) => {
  if (!data) return null;
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.container}>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={50}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.absolute}>
          <TouchableOpacity onPress={closeModal}>
            <View style={{height: '100%', width: '100%'}} />
          </TouchableOpacity>
        </View>
        <View style={styles.DetailsCard}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: vs(23),
                paddingHorizontal: s(23),
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: '#F99231',
                  borderRadius: 7,
                }}
              />
              <Text style={{marginLeft: 15, fontSize: 18, lineHeight: 19}}>
                Details Page
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
              }}>
              <View style={{flexDirection: 'row', paddingHorizontal: s(33)}}>
                <Image
                  source={require(`../assets/images/calendar.png`)}
                  style={{width: 21, height: 21}}
                />
                <Text
                  style={{fontSize: 16, color: '#050505', paddingLeft: s(14)}}>
                  3rd Feb . 6pm
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 295,
                height: 100,
                paddingVertical: vs(15),
                paddingHorizontal: s(23),
              }}>
              <Text style={{fontSize: 13.5}}>{data.description}</Text>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 23}}>
              <Image source={require(`../assets/images/unchecked.png`)} />
              <Text style={{marginLeft: 12, fontSize: 16, lineHeight: 16}}>
                completed
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={closeModal}>
            <View
              style={{
                backgroundColor: '#FF5C5C',
                alignItems: 'center',
                height: 50,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              {/* <Image source={require(`../assets/images/delete.png`)} /> */}
              <Text style={{fontSize: 18, color: 'white'}}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  DetailsCard: {
    width: 335,
    height: 305,
    borderRadius: 3,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default DetailsPage;
