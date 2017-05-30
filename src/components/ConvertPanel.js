import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../actions';

class ConvertPanel extends Component {

  onCancelPressed = () => {
    this.props.removeAllVideos();
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="convert-panel">
        <button className="btn red accent-2" onClick={this.onCancelPressed}>
        <i className="small material-icons left" >delete</i>
          Cancel
        </button>
        <button className="btn green accent-2" onClick={this.props.convertVideos.bind(null, this.props.videos)}>
          <i className="small material-icons left">loop</i>
          Convert
        </button>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const videos = _.map(state.videos);
  return { videos };
}

export default withRouter(
  connect(mapStateToProps, actions)(ConvertPanel)
);
