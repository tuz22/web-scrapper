import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View } from "react-native";
import { Button } from "../Button";
import { Header } from "../Header/Header";
import { Typography } from "../Typography";
import { Spacer } from "../Spacer";

export const LinkListScreen = () => {

  const navigation = useNavigation();
  
  const onPressButton = useCallback(() => {
    navigation.navigate('LinkDetail')
  }, [])
  
  const onPressAddButton = useCallback(() => {
    navigation.navigate('AddLink')
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title='LINK LIST' />
        </Header.Group>
      </Header>

      <View style={{ flex: 1}}>
        <Button onPress={onPressButton}>
          <Typography>LINK DETAIL로 이동하기</Typography>
        </Button>
        <Spacer space={12} />
        <Button onPress={onPressAddButton}>
          <Typography>링크 등록하기로 이동하기</Typography>
        </Button>
      </View>
    </View>
  )
}