import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import { Rootnavigation } from './src/navigations/RootNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <NavigationContainer>
          <Rootnavigation />
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}