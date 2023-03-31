import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { SingleLineInput } from "../components/SingleLineInput";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";
import { Button } from "../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "../components/Spacer";
import { useSetRecoilState } from "recoil";
import { atomLinkList } from "../states/atomLinkList";

export const AddLinkScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();
  const updateList = useSetRecoilState(atomLinkList); // atom 가져다 쓰려면 선언해주기

  const [url, setUrl] = useState('');

  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, [])

  const onPressSave = useCallback(() => {
    console.log('저장버튼 클릭')
    console.log(url)
    if (url === '') return; // 입력한 url이 공백이면 동작x
    updateList((prevState) => {
      const list = [{
        title: '',
        image: '',
        link: url,
        createdAt: new Date().toISOString(),
      }]

      return {
        list: list.concat(prevState.list)
      }
    })
    setUrl('');
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
          // value={url}
          onChangeText={setUrl}
          placeholder='https://example.com'
        />
      </View>
      <Button onPress={onPressSave}>
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