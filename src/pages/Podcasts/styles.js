import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import IconPlay from 'react-native-vector-icons/Entypo';

export const Container = styled(LinearGradient).attrs({
  colors: ['#fff', '#D9E5FE'],
})`
  flex: 1;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})``;

export const PodcastDetails = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 10}px;
`;

export const BackgroundGradient = styled.View`
  position: absolute;
  background: #000;
  width: 100%;
  height: ${320 + getStatusBarHeight()}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${320 + getStatusBarHeight()}px;
  opacity: 0.2;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, left: 5, right: 5, bottom: 5 },
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 10}px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export const PodcastTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const Count = styled.Text`
  color: #92c2fe;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 45px;
  background: #0448b4;
  margin: 15px 140px 0;
  border-radius: 25px;
  elevation: 10;

  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
`;

export const PlayButtonIcon = styled(IconPlay).attrs({
  color: '#fff',
  size: 24,
})``;

export const Episode = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#0448b4' : '#000')};
`;

export const Author = styled.Text`
  color: #666666;
  font-size: 14px;
  margin-top: 3px;
`;
