import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ButtonText } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <ButtonText>{title}</ButtonText>
      </Container>
    </GestureHandlerRootView>
  );
}
