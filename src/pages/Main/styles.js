import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import IconLoading from "react-native-vector-icons/Fontisto";
import Icons from "react-native-vector-icons/FontAwesome";

export const Container = styled(LinearGradient).attrs({
  colors: ["#FFF", "#D9E5FE"]
})`
  flex: 1;
`;

export const PodcastTitle = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: bold;
  margin: 25px 0 0 10px; 
`;

export const SectionTitle = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0 0 10px; 
`;

export const VerseDay = styled(LinearGradient).attrs({
  colors: ["#3b41ff", "#3bd8ff"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 25px;
  margin: 15px 10px 0;
  background: #fff;
  border-radius: 20px;
`;

export const VerseText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;

`;
export const VerseReference = styled.Text`
  color: #92c2fe;
  font-size: 12px;
  margin-top: 3px;
`;

export const MessageDay = styled(LinearGradient).attrs({
  colors: ["#5b146f", "#ff009c"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 25px;
  margin: 15px 10px 0;
  background: #fff;
  border-radius: 20px;
`;

export const MessageTitle = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const MessageSummary = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const MessageVerse = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const MessageReference = styled.Text`
  color: #ccc;
  font-size: 12px;
  margin: 3px 0 5px;
`;

export const MessageFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const MessageDate = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ReadIcon = styled(Icons).attrs({
  color: "#fff",
  size: 28
})``;

export const PodcastList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 40
  }
})``;

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
  margin: 10px 10px 0;
  background: #fff;
  border-radius: 20px;
`;

export const Cover = styled.Image`
  width: 65px;
  height: 65px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const Info = styled.View`
  margin-left: 10px;
  padding-left: 5px;
  width: 70%;
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

export const DotsIcon = styled(Icons).attrs({
  color: "#ccc",
  size: 26
})``;
