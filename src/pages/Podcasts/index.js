import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Share } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PlayerActions from "../../store/ducks/player";

import {
  Container,
  EpisodeList,
  PodcastDetails,
  BackgroundGradient,
  Background,
  BackButton,
  Cover,
  PodcastTitle,
  Count,
  PlayButton,
  PlayButtonIcon,
  PlayListHeader,
  PlayListText,
  Episode,
  Title,
  Author,
  ShareButton,
  ShareButtonIcon
} from "./styles";

class Podcasts extends Component {
  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handlePlay = episodeId => {
    const { setPodcastRequest, navigation } = this.props;
    const podcast = navigation.getParam("podcast");

    setPodcastRequest(podcast, episodeId);
  };

  handleShare = (title, artist) => {
    Share.share({
      message: `Ouça *${title}* por ${artist} em Show da Fé Streaming. Baixe *Show da Fé Streaming* na Play Store e ouça mensagens que transformarão sua vida. https://play.google.com/store/apps/details?id=com.showdafestreaming`,
      url: 'https://play.google.com/store/apps/details?id=com.showdafestreaming',
      title: `Ouça *${title}* de ${artist} em Show da Fé Streaming.`
    }, {
      dialogTitle: `Compartilhe a mensagem ${title}`, // Android only 
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ] // iOS only 
    })
  }

  render() {
    const { navigation, currentEpisode } = this.props;
    const podcast = navigation.getParam("podcast");

    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={"transparent"}
        />
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <BackgroundGradient />
              <Background source={{ uri: podcast.cover }} blurRadius={5} />

              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color="#FFF" />
              </BackButton>

              <Cover source={{ uri: podcast.cover }} />

              <PodcastTitle>{podcast.title}</PodcastTitle>
              <Count>{podcast.tracks.length} episódios</Count>

              <PlayButton onPress={() => this.handlePlay()}>
                <PlayButtonIcon name="controller-play" />
              </PlayButton>

            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode onPress={() => this.handlePlay(episode.id)}>
              <View style={{ flex: 1 }}>
                <Title
                  active={currentEpisode && currentEpisode.id === episode.id}
                >
                  {episode.title}
                </Title>
                <Author>{episode.artist}</Author>
              </View>
              <ShareButton onPress={() => this.handleShare(episode.title, episode.artist)}>
                <ShareButtonIcon name="share" />
              </ShareButton>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(
      episode => episode.id === state.player.current
    )
    : null
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
