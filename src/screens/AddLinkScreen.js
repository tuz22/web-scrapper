import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { SingleLineInput } from "../components/SingleLineInput";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";
import { Button } from "../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "../components/Spacer";

export const AddLinkScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();

  const [url, setUrl] = useState('');

  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title='ADDLINK' />
        </Header.Group>
        <Header.Icon iconName='close' onPress={onPressClose} />
      </Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
        <SingleLineInput 
          value={url}
          onChangeText={setUrl}
          placeholder='https://example.com'
        />
      </View>
      <Button>
        <View style={{ backgroundColor: url === '' ? 'gray' : 'black'}}>
          <View style={{ height: 52, alignItems: 'center', justifyContent: 'center'}}>
            <Typography color='white' fontSize={18}>저장하기</Typography>
          </View>
          <Spacer space={safeAreaInset.bottom} />
        </View>
      </Button>
    </View>
  )
}