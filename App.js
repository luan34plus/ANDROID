import { SafeAreaView, StatusBar } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/telas/Cesta';

export default function App() {
  const [fonteCarregada] =useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}