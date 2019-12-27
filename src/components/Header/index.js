import React, { Component } from "react";
import { StatusBar, View, ActivityIndicator } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { PageBar, PageTitle, PageSubtitle } from "./styles";

class Header extends Component {
  render() {
    const { podcasts } = this.props;
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={"transparent"}
        />
        <PageBar>
          <PageTitle>
            Show da Fé
            <PageSubtitle> Streaming </PageSubtitle>
          </PageTitle>
          {podcasts.loading && <ActivityIndicator size="small" color="#fff" />}
        </PageBar>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts
});

export default connect(mapStateToProps)(Header);
