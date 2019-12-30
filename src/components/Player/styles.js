import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled(LinearGradient).attrs({
  colors: ["#D9E5FE", "#fff"],
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  borderTopLeftRadius: 38,
  overflow: "hidden"
})`
  height: ${74 + getBottomSpace()}px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px ${getBottomSpace()}px;
`;

export const CoverBackground = styled.Image.attrs({
  blurRadius: 5
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0;
`;

export const EpisodeInfo = styled.View``;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: #444;
  margin-top: 3px;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, left: 5, right: 5, bottom: 5 }
})`
  margin-left: 10px;
`;

export const ControlIcon = styled(Icon).attrs({
  color: "#222",
  size: 32
})``;
