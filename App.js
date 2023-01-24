import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Brightness from 'expo-brightness';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';

export default function App() {

  const [permissionStatus, setPermissionStatus] = useState();
  const [appBackgroundColor, setAppBackgroundColor] = useState('crimson');

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      setPermissionStatus(status);
    })();
  }, []);

  if (permissionStatus !== "granted") {
    return <View>
      <Text>Permission to change brightness not granted</Text>
    </View>
  }

  return (
    <View style={[styles.container, { backgroundColor: appBackgroundColor }]}>
      <Text color='#fff'>Select Brightness Level</Text>
      <Button
        title="Min"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          await Brightness.setSystemBrightnessAsync(0);
        }}
      />
      <Button
        title="Dim"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          await Brightness.setSystemBrightnessAsync(0.2);
        }}
      />
      <Button
        title="Mid"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          await Brightness.setSystemBrightnessAsync(0.5);
        }}
      />
      <Button
        title="Bright"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          await Brightness.setSystemBrightnessAsync(0.8);
        }}
      />
      <Button
        title="Max"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          await Brightness.setSystemBrightnessAsync(1);
        }}
      />
      <StatusBar style="auto" />
      <Text color='#fff'>Select Color</Text>
      <Button
        title="Red"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          setAppBackgroundColor('crimson');
        }}
      />
      <Button
        title="Blue"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          setAppBackgroundColor('aqua');
        }}
      />
      <Button
        title="Green"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          setAppBackgroundColor('lime');
        }}
      />
      <Button
        title="White"
        onPress={async () => {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          setAppBackgroundColor('white');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
