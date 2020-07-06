import React, { Component } from "react";
import { StatusBar } from "react-native";
import axios from "axios"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PodcastsActions from "../../store/ducks/podcasts";

import { View, ActivityIndicator } from "react-native";

import Header from "../../components/Header"
import Player from "../../components/Player";

import {
  Container,
  Error,
  ErrorText,
  ErrorSubText,
  PodcastList,
  Podcast,
  Cover,
  Info,
  Title,
  Artist,
  Count,
  DotsIcon,
  PodcastTitle,
  SectionTitle,
  VerseDay,
  VerseText,
  VerseReference,
  MessageDay,
  MessageTitle,
  MessageSummary,
  MessageVerse,
  MessageReference
} from "./styles";

class Main extends Component {
  state = {
    verseOfDay: {},
    messageOfDay: {}
  }

  async componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();

    try {
      const responseVerse = await axios.get('http://webserverhomolog.ongrace.com/versiculo.json')

      this.setState({ verseOfDay: responseVerse.data.resposta })

      const responseMessage = await axios.get('http://webserverhomolog.ongrace.com/mensagemdia.json')

      this.setState({ messageOfDay: responseMessage.data.resposta[0] })

      console.tron.log(this.state)
    } catch (err) {
      this.setState({ verseOfDay: { error: true } })

      this.setState({ messageOfDay: { error: true } })
    }

  }

  handlePodcastPress = podcast => {
    const { navigation } = this.props;
    navigation.navigate("Podcasts", { podcast });
  };

  renderError = () => {
    return (
      <Error>
        <ErrorText>Erro de conexão.</ErrorText>
        <ErrorSubText>
          Verifique se você está conectado à internet.
        </ErrorSubText>
        <ErrorSubText>
          Feche o app, limpe a memória e abra-o novamente.
        </ErrorSubText>
      </Error>
    );
  };

  renderVerse = () => {
    const { verseOfDay } = this.state
    return (
      <>
        <SectionTitle>Mensagens</SectionTitle>
        <VerseDay>
          <VerseText>{verseOfDay.versiculo}</VerseText>
          <VerseReference>{verseOfDay.referencia}</VerseReference>
        </VerseDay>
      </>
    )
  }

  renderMessage = () => {
    const { messageOfDay } = this.state
    return (
      <>
        <MessageDay>
          <MessageTitle>{messageOfDay.titulo}</MessageTitle>
          <MessageVerse>{messageOfDay.versiculo}</MessageVerse>
          <MessageReference>{messageOfDay.referencia}</MessageReference>
          <MessageSummary>{messageOfDay.resumo}</MessageSummary>
        </MessageDay>
      </>
    )
  }

  render() {
    const { podcasts } = this.props;
    const { verseOfDay, messageOfDay } = this.state;

    return (
      <Container>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={"transparent"}
        />
        <Header />
        <PodcastList
          ListHeaderComponent={() => (
            <>
              <View>{podcasts.error && this.renderError()}</View>
              <View>{!verseOfDay.error && this.renderVerse()}</View>
              <View>{!messageOfDay.error && this.renderMessage()}</View>
              <PodcastTitle>Podcasts</PodcastTitle>
            </>
          )}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Artist>{podcast.artist}</Artist>
                <Count>{podcast.tracks.length} episódios</Count>
              </Info>
              <DotsIcon name="angle-right" />
            </Podcast>
          )}
        />
        <Player />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  podcasts: state.podcasts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
