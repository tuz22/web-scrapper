import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Rootnavigation } from './src/navigations/RootNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Rootnavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}