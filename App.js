import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';
import * as Brightness from 'expo-brightness';
import * as Haptics from 'expo-haptics';

// Styling for app
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

  // React Hooks
  const [permissionStatus, setPermissionStatus] = useState();
  const [appBackgroundColor, setAppBackgroundColor] = useState('crimson');

  // Function for getting permissions to use device brightness
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      setPermissionStatus(status);
    })();
  }, []);

  // Message if permission is denied to control screen brightness
  if (permissionStatus !== "granted") {
    return <View>
      <Text>Permission to change brightness not granted</Text>
    </View>
  }

  return (

    // Everything on the screen
    <View style={[styles.container, { backgroundColor: appBackgroundColor }]}>
      <StatusBar style="auto" />

      {/* "Select Color" above color selection buttons */}
      <Text color='#fff' style={{ position: 'absolute', bottom: '21%' }}>Select Color</Text>

      {/* Color Selection Buttons */}
      <Stack className="color-stack" style={{ flexDirection: 'row', position: 'absolute', bottom: '15%', gap: '5%' }}>

        {/* Red Color Selection Button */}
        <Button
          variant="outlined"
          title="Red"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Color Parameter
            setAppBackgroundColor('crimson');
          }}
        />

        {/* Blue Color Selection Button */}
        <Button
          variant="outlined"
          title="Blue"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Color Parameter
            setAppBackgroundColor('aqua');
          }}
        />

        {/* Green Color Selection Button */}
        <Button
          variant="outlined"
          title="Green"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Color Parameter
            setAppBackgroundColor('lime');
          }}
        />

        {/* White Color Selection Button */}
        <Button
          variant="outlined"
          title="White"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Color Parameter
            setAppBackgroundColor('white');
          }}
        />
      </Stack>

      {/* "Select Brightness Level" above Brightness Selection Buttons */}
      <Text color='#fff' style={{ position: 'absolute', bottom: '11%' }}>Select Brightness Level</Text>

      {/* Brightness Level Selection Buttons */}
      <Stack className="brightness-stack" style={{ flexDirection: 'row', position: 'absolute', bottom: '5%' }}>
        
        {/* 0% Brightness Level Button*/}
        <Button
          variant="outlined"
          title="Min"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Brightness Level Parameter
            await Brightness.setSystemBrightnessAsync(0);
          }}
        />
        
        {/* 20% Brightness Level Button*/}
        <Button
          variant="outlined"
          title="Dim"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Brightness Level Parameter
            await Brightness.setSystemBrightnessAsync(0.2);
          }}
        />
        
        {/* 50% Brightness Level Button*/}
        <Button
          variant="outlined"
          title="Mid"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Brightness Level Parameter
            await Brightness.setSystemBrightnessAsync(0.5);
          }}
        />
        
        {/* 80% Brightness Level Button*/}
        <Button
          variant="outlined"
          title="Bright"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Brightness Level Parameter
            await Brightness.setSystemBrightnessAsync(0.8);
          }}
        />
        
        {/* 100% Brightness Level Button*/}
        <Button
          variant="outlined"
          title="Max"
          onPress={async () => {

            // Haptic Feedback Parameter
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

            // Brightness Level Parameter
            await Brightness.setSystemBrightnessAsync(1);
          }}
        />
      </Stack>
    </View>
  );
}

