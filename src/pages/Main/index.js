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
  MessageFooter,
  MessageDate,
  ReadIcon,
  MessageVerse,
  MessageReference
} from "./styles";

class Main extends Component {
  state = {
    verseOfDay: {},
    messageOfDay: {},
    error: null
  }

  async componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();

    try {
      const responseVerse = await axios.get('http://webserverhomolog.ongrace.com/versiculo.json')
      this.setState({ verseOfDay: responseVerse.data.resposta })

      const responseMessage = await axios.get('http://webserverhomolog.ongrace.com/mensagemdia.json')
      this.setState({ messageOfDay: responseMessage.data.resposta[0] })
    } catch (err) {
      this.setState({ error: true })
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

  renderMessage = () => {
    const { verseOfDay, messageOfDay } = this.state
    return (
      <>
        <VerseDay>
          <VerseText>{verseOfDay.versiculo}</VerseText>
          <VerseReference>{verseOfDay.referencia}</VerseReference>
        </VerseDay>
        <MessageDay>
          <MessageTitle>{messageOfDay.titulo}</MessageTitle>
          <MessageSummary>{messageOfDay.resumo}</MessageSummary>
          <MessageFooter>
            <MessageDate>{messageOfDay.data_publicacao_formatada}</MessageDate>
            <ReadIcon name="chevron-circle-right" />
          </MessageFooter>
        </MessageDay>
      </>
    )
  }

  render() {
    const { podcasts } = this.props;

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
              <View>{podcasts.error ? this.renderError() : this.renderMessage()}</View>
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
