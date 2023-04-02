import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { SingleLineInput } from '../components/SingleLineInput'
import { Header } from '../components/Header/Header';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from '../components/Spacer';
import { useSetRecoilState } from 'recoil';
import { atomLinkList } from '../states/atomLinkList';
import { getOpenGraphData } from '../utils/OpenGraphTagUtils';
import { useWindowDimensions } from 'react-native';
import { RemoteImage } from '../components/RemoteImage';
import { getClipboardString } from '../utils/ClipboardUtils';

export const AddLinkScreen = ()=>{
  const navigation = useNavigation();
  const safeAreaInsets = useSafeAreaInsets();
  const updateList = useSetRecoilState(atomLinkList); // atom 가져다 쓰려면 선언해주기
  const [metaData, setMetaData] = useState(null);
  const [url, setUrl] = useState('');
  const {width} = useWindowDimensions();

  const onPressClose = useCallback ( () => {
    navigation.goBack();
  }, []);

  const onPressSave = useCallback(() => {
    if (url === '') return;  // 입력한 url이 공백이면 동작x
    if (metaData === null) return onSubmitEditing()
    
    updateList((prevState) => {
      const list = [{
        // title: '',
        title: metaData.title,
        // image: '',
        image: metaData.image,
        link: url,
        createdAt: new Date().toISOString(),
      },
      // ...prevState.list];
    ]
    console.log('list', list)
    // onSubmitEditing()
      
      return {
        // list
        list: list.concat(prevState.list)
      }
    })
    setUrl('');
    onPressClose();

  }, [url, metaData])

  const onSubmitEditing = useCallback(async() => {
    const result = await getOpenGraphData(url);

    console.log('onSubmitEditing : ', result);

    setMetaData(result);

  }, [url])

  const onGetClipboardString = useCallback(async() => {
    const result = await getClipboardString();
    if ( result.startsWith('http://') || result.startsWith('https://')) {
      setUrl(result);
      const ogResult = await getOpenGraphData(result);
      setMetaData({
        title: ogResult.title,
        image: ogResult.image,
        description: ogResult.description,
      })
    }
    console.log('result', result);
  }, [])

  useEffect(() => {
    onGetClipboardString();
  }, [])

  return (
    <View style={{ flex:1 }}>
      <Header>
        <Header.Group>
          <Header.Title title='ADD LINK' />
        </Header.Group>
        <Header.Icon iconName='close' onPress={onPressClose} />
      </Header>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 32, paddingHorizontal:24 }}>
        <SingleLineInput
          value ={url}
          onChangeText={setUrl}
          placeholder='https:///www.example.com'
          onSubmitEditing={onSubmitEditing}
        />

        {
          metaData !== null && (
            <>
              <Spacer space={20} />
              <View style={{ borderWidth: 1, borderRadius: 4, borderColor: 'gray'}} >
                <RemoteImage url={metaData.image} width={width - 48} height={(width - 48) * 0.5} />
                <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
                  <Spacer space={10} />
                  <Typography fontSize={20} color='black'>{metaData.title}</Typography>
                  <Spacer space={4} />
                  <Typography fontSize={16} color='gray'>{metaData.description}</Typography>
                </View>
              </View>
            </>
          )
        }
      </View>

      <Button onPress={onPressSave}>
        <View style={{ backgroundColor: url === '' ? 'gray' :'black' }}>
          <View style={{ height:52, alignItems:'center', justifyContent:'center' }}>
            <Typography color={'white'} fontSize={18}>저장하기</Typography>
          </View>
          <Spacer space={safeAreaInsets.bottom}/>
        </View>                
      </Button>
    </View>
  )
}
