import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import IconLoading from "react-native-vector-icons/Fontisto";
import IconDots from "react-native-vector-icons/FontAwesome";

export const PageBar = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ["#0458a1", "#1fbbf9", "#fff"]
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  padding: 30px 20px 10px;
  margin-bottom: 0px;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  color: #000;
`;

export const PageSubtitle = styled.Text`
  font-size: 22px;
  font-weight: normal;
  color: #000;
`;
