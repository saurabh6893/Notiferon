import { StatusBar } from 'expo-status-bar'
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
} from 'react-native'
import * as Notifications from 'expo-notifications'
import { useState } from 'react'

const image = {
  uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
}

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    }
  },
})

//nothing happens below this//

export default function App() {
  const [body, setbody] = useState('')
  const [seconds, setSeconds] = useState('')

  const grabber = (text) => {
    setbody(text)
  }
  const grabber2 = (t) => {
    setSeconds(t * 1)
  }
  function Schedulex() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Yooo',
        body,
        data: { username: 'Newbies' },
      },
      trigger: {
        seconds,
      },
    })
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <TextInput
          onChangeText={grabber}
          style={styles.enex}
          placeholder='Enter somthing'
        />
        <TextInput
          onChangeText={grabber2}
          style={styles.enex}
          placeholder='Enter time'
        />
        <Button title='Schedule Bomb' onPress={Schedulex} />
        <StatusBar style='auto' />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  enex: {
    padding: 2,
    borderWidth: 1,
    minWidth: '40%',
    margin: 20,
    backgroundColor: '#808080',
  },
})
