import PushNotification from "react-native-push-notification"

export const makeNotify = () => {
  console.log("notifefefefefefefe")
  PushNotification.localNotification({
    channelId: "channel-id",
    title: "My Notification Title", // (optional)
    message: "My Notification Message", // (required)
  });
}




