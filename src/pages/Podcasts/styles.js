import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import LinearGradient from "react-native-linear-gradient";
import IconPlay from "react-native-vector-icons/Entypo";
import IconShare from "react-native-vector-icons/Entypo";

export const Container = styled(LinearGradient).attrs({
  colors: ["#fff", "#D9E5FE"]
})`
  flex: 1;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 40 }
})``;

export const PodcastDetails = styled.View`
  padding: 0 0 20px;
  align-items:center;
  padding-top: ${getStatusBarHeight() + 25}px;
`;

export const BackgroundGradient = styled.View`
  position: absolute;
  background: #000;
  width: 100%;
  height: ${300 + getStatusBarHeight()}px;
  border-bottom-left-radius: 50px;
`;

export const Background = styled.ImageBackground.attrs({
  imageStyle: { borderBottomLeftRadius: 50 }
})`
  position: absolute;
  width: 100%;
  height: ${300 + getStatusBarHeight()}px;
  opacity: 0.3;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, left: 5, right: 5, bottom: 5 }
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 25}px;
`;

export const CoverFrame = styled.View`
  margin-top: 30px;
  elevation: 10;
`;

export const Cover = styled.Image`
  width: 210px;
  height: 260px;
  border-radius: 20px;
`;

export const PlayFrame = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  padding: 15px;
  margin-top: -70px;
`;

export const PodcastTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 130px;
`;

export const Count = styled.Text`
  color: #fff;
  font-size: 16px;
  position: absolute;
  left: -5px;
  top: ${getStatusBarHeight() + 130}px;
  transform: rotate(270deg);
`;

export const PlayListHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 5px 15px;
  margin-top: -10px;
`;

export const PlayListText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  height: 45px;
  width: 45px;
  background: #fff;
  border-radius: 15px;
  elevation: 10;
  margin-left: 10px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
  margin-left: 10px;
`;

export const PlayButtonIcon = styled(IconPlay).attrs({
  color: "#0448b4",
  size: 26
})`
  margin-left: 3px;
`;

export const Episode = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 5px 0;
  padding: 15px 10px 15px 20px;
  background: #fff;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ active }) => (active ? "#0448b4" : "#000")};
`;

export const Author = styled.Text`
  color: #666666;
  font-size: 12px;
  margin-top: 3px;
`;

export const ShareButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})` 
  height: auto; 
  width: 40px; 
  align-self: stretch; 
  align-items: center; 
  justify-content: center; 
`;

export const ShareButtonIcon = styled(IconShare).attrs({
  color: "#cce2ff",
  size: 25
})`
  `; 