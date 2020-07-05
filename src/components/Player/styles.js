import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled(LinearGradient).attrs({
  colors: ["#1715b3", "#3499ff"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  borderTopRightRadius: 35,
  borderBottomRightRadius: 35,
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "hidden"
})`
  height: ${70 + getBottomSpace()}px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px ${getBottomSpace()}px;
`;

export const EpisodeInfo = styled.View``;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: #92c2fe;
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
  color: "#fff",
  size: 32
})``;
