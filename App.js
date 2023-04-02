<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import { Rootnavigation } from './src/navigations/RootNavigation';
import { RecoilCustomPersist } from './src/components/RecoilCustomPersis';

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <RecoilCustomPersist>
          <NavigationContainer>
            <Rootnavigation />
          </NavigationContainer>
        </RecoilCustomPersist>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}
>>>>>>> 16d0024f20a5ba811331466c15d1c93fa2d6912f
