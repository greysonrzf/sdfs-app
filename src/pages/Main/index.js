import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsActions from '../../store/ducks/podcasts';

import {
  Container,
  PodcastList,
  PageBar,
  PageTitle,
  PageSubtitle,
  Podcast,
  Cover,
  Info,
  Title,
  Artist,
  Count,
  DotsIcon,
} from './styles';

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  handlePodcastPress = podcast => {
    const { navigation } = this.props;
    navigation.navigate('Podcasts', { podcast });
  };

  render() {
    const { podcasts } = this.props;

    return (
      <Container>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <PodcastList
          ListHeaderComponent={() => (
            <PageBar>
              <PageTitle>
                Show da Fé
                <PageSubtitle> Streaming </PageSubtitle>
              </PageTitle>
            </PageBar>
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
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
