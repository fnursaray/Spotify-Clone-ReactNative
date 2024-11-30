import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useProgress} from 'react-native-track-player';
import {useState} from 'react';

const CustomModal = ({
  selectedTrack,
  formatTime,
  seekBackward,
  seekForward,
  togglePlayback,
  isPlaying,
  modalVisible,
  setModalVisible,
}) => {
  const progress = useProgress();

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      swipeDirection="down"
      onSwipeComplete={() => setModalVisible(false)}
      style={{margin: 0}}>
      <View
        style={{
          backgroundColor: '#5072A7',
          width: '100%',
          height: '100%',
          paddingTop: 60,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <AntDesign name="down" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            Songs
          </Text>

          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>

        <View style={{padding: 10, marginTop: 20}}>
          <Image
            source={{uri: selectedTrack?.images.coverart}}
            style={{width: '100%', height: 400, borderRadius: 4}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                {' '}
                {selectedTrack?.title}{' '}
              </Text>
              <Text style={{fontSize: 18, color: 'white'}}>
                {' '}
                {selectedTrack?.subtitle}{' '}
              </Text>
            </View>

            <AntDesign name="heart" size={24} color="pink" />
          </View>

          <View style={{marginTop: 10}}>
            <View
              style={{
                width: '100%',
                marginTop: 10,
                height: 3,
                backgroundColor: 'gray',
                borderRadius: 5,
              }}>
              <View
                style={[
                  styles.progressbar,
                  {
                    width: `${(progress.position / progress.duration) * 100}%`,
                  },
                ]}
              />
              <View
                style={{
                  position: 'absolute',
                  top: -5,
                  width: 10,
                  height: 10,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  left: `${(progress.position / progress.duration) * 100}%`,
                }}
              />
            </View>

            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 15}}>
                {' '}
                {formatTime(progress.position)}
              </Text>
              <Text style={{color: 'white', fontSize: 15}}>
                {' '}
                {formatTime(progress.duration)}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 18,
                alignItems: 'center',
              }}>
              <Pressable onPress={seekBackward}>
                <Entypo
                  name="controller-fast-backward"
                  size={30}
                  color="white"
                />
              </Pressable>

              <Pressable>
                <Ionicons name="play-skip-back" size={30} color="white" />
              </Pressable>

              <Pressable onPress={togglePlayback}>
                {isPlaying ? (
                  <AntDesign name="pausecircle" size={60} color="white" />
                ) : (
                  <Entypo name="controller-play" size={60} color="white" />
                )}
              </Pressable>

              <Pressable>
                <Ionicons name="play-skip-forward" size={30} color="white" />
              </Pressable>

              <Pressable onPress={seekForward}>
                <Entypo
                  name="controller-fast-forward"
                  size={30}
                  color="white"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  progressbar: {height: '100%', backgroundColor: 'white'},
});
