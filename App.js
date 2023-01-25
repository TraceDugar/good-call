import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';
import * as Brightness from 'expo-brightness';
import * as Haptics from 'expo-haptics';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Stack: {
    display: 'flex',
  },
});

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
      <StatusBar style="auto" />
      <Text color='#fff' style={{position: 'absolute', bottom: '21%'}}>Select Color</Text>
      <Stack className="color-stack" style={{flexDirection: 'row', position: 'absolute', bottom: '15%', gap: '5%'}}>
        <Button
          variant="outlined"
          title="Red"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            setAppBackgroundColor('crimson');
          }}
        />
        <Button
          variant="outlined"
          title="Blue"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            setAppBackgroundColor('aqua');
          }}
        />
        <Button
          variant="outlined"
          title="Green"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            setAppBackgroundColor('lime');
          }}
        />
        <Button
          variant="outlined"
          title="White"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            setAppBackgroundColor('white');
          }}
        />
      </Stack>
      <Text color='#fff' style={{position: 'absolute', bottom: '11%'}}>Select Brightness Level</Text>
      <Stack className="brightness-stack" style={{flexDirection: 'row', position: 'absolute', bottom: '5%'}}>
        <Button
          variant="outlined"
          title="Min"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            await Brightness.setSystemBrightnessAsync(0);
          }}
        />
        <Button
          variant="outlined"
          title="Dim"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            await Brightness.setSystemBrightnessAsync(0.2);
          }}
        />
        <Button
          variant="outlined"
          title="Mid"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            await Brightness.setSystemBrightnessAsync(0.5);
          }}
        />
        <Button
          variant="outlined"
          title="Bright"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            await Brightness.setSystemBrightnessAsync(0.8);
          }}
        />
        <Button
          variant="outlined"
          title="Max"
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            await Brightness.setSystemBrightnessAsync(1);
          }}
        />
      </Stack>
    </View>
  );
}

