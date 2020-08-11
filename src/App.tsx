import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import PushNotification from 'react-native-push-notification';

const App: React.FC = () => {
  const handleLocalNotificationClick = () => {
    PushNotification.localNotification({
      title: "My Notification Title",
      message: 'Push notification Message',
    })
  }

  const hendleLocalNotificationSchedule = () => {
    PushNotification.localNotificationSchedule({
      title: "My Notification Title",
      message: 'Push notification Message',
      date: new Date(Date.now() + 4000)
    })
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button
            title="Send Push Notification"
            onPress={() => handleLocalNotificationClick()}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title="schedule Push Notification"
            onPress={() => hendleLocalNotificationSchedule()}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    margin: 10
  }
})


export default App;
