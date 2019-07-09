/** @format */

import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name
      })
  };
}

class Avatar extends Component {
  state = {
    photo: "https://rivoltafilippo.com/app/uploads/2019/07/avatar-default.jpg"
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&tandom&gender[]=male", {
      headers: new Headers({
        "X-API-KEY": "c4410bcdb5d2f49f5f9ecb0648f6b9"
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          photo: res[0].photo
        });
        this.props.updateName(res[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
