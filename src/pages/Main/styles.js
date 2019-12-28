import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import IconLoading from "react-native-vector-icons/Fontisto";
import IconDots from "react-native-vector-icons/FontAwesome";

export const Container = styled(LinearGradient).attrs({
  start:{x: 0, y: 0}, end:{x: 1, y: 0}, colors: ["#0578ca", "#D9E5FE"]
})`
  flex: 1;
`;

export const PodcastList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30
  }
})``;

export const PageBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #000;
`;

export const PageSubtitle = styled.Text`
  font-size: 22px;
  font-weight: normal;
  color: #000;
`;

export const Error = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  margin: 10px 10px 0;
  background: #ff7575;
  border-radius: 25px;
`;

export const ErrorText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  text-align: left;
`;

export const ErrorSubText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  width: 100%;
  text-align: left;
`;

export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 10px 10px 0 55px;
  background: #fff;
  border-radius: 10px;
`;

export const Cover = styled.Image`
  width: 65px;
  height: 65px;
  margin-left: -50px;
  border-radius: 35px;
  /* border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px; */
`;

export const Info = styled.View`
  margin-left: 0px;
  width: 240px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const Artist = styled.Text`
  color: #555;
  font-size: 14px;
  margin-top: 3px;
`;

export const Count = styled.Text`
  color: #888;
  font-size: 12px;
  margin-top: 3px;
`;

export const DotsIcon = styled(IconDots).attrs({
  color: "#ccc",
  size: 26
})``;
