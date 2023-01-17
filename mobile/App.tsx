//REACT
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ActivityIndicator } from 'react-native'
//EXPO
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
//SCREENS
import { Home } from './src/screens/Home'
//STYLED
import { ThemeProvider } from 'styled-components/native'
import { light } from './src/theme'
//UTILS LIBS
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={light}>
        <StatusBar style='light' animated translucent/>
        {fontsLoaded ? <Home />: <ActivityIndicator />}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
