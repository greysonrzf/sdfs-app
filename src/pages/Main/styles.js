import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import IconLoading from 'react-native-vector-icons/Fontisto';
import IconDots from 'react-native-vector-icons/FontAwesome';

export const Container = styled(LinearGradient).attrs({
  colors: ['#fff', '#D9E5FE'],
})`
  flex: 1;
`;

export const PodcastList = styled.FlatList.attrs({
  contentContainerStyle: {
    // paddingTop: getStatusBarHeight() + 0,
    paddingBottom: 30,
  },
})``;

export const PageBar = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #000;
  padding-left: 20px;
`;

export const PageSubtitle = styled.Text`
  font-size: 22px;
  font-weight: normal;
  color: #000;
`;

export const LoadingIcon = styled(IconLoading).attrs({
  color: '#fff',
  size: 20,
})``;

export const Podcast = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 10px 10px 0;
  background: #fff;
  border-radius: 25px;
`;

export const Cover = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 20px;
`;

export const Info = styled.View`
  margin-left: 10px;
  width: 180px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const Artist = styled.Text`
  color: #555;
  font-size: 16px;
  margin-top: 3px;
`;

export const Count = styled.Text`
  color: #888;
  font-size: 14px;
  margin-top: 3px;
`;

export const DotsIcon = styled(IconDots).attrs({
  color: '#ccc',
  size: 26,
})``;
