import React, { useState } from "react";
import { TextInput, View } from "react-native";

export const SingleLineInput = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{
      alignSelf: 'stretch',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'gray',
    }}>
      <TextInput 
        autoCorrect={false} // 대문자로 변경해주는 속성
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={{ fontSize: props.fontSize ?? 20}} // 지정된 값들만 할 수 있도록 함. 기본은 20
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
    </View>
  )
}