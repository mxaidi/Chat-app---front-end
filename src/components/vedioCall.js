import React, { Component } from 'react';

class VedioCall extends Component {

  state = {
    videoSrc: null,
  };

  componentDidMount= () => {
    navigator.mediaDevices.getUserMedia({audio: false, video:{ width: { min: 1024, ideal: 1280, max: 1920 },
      height: { min: 576, ideal: 720, max: 1080 }},}, this.handleVideo, this.videoError)
    .then(stream => this.refs.video.src = stream)
    .catch(e => console.log(e.name + ": "+ e.message));
  };


  handleVideo= (stream)=> {
    // Update the state, triggering the component to re-render with the correct stream
    console.log('', stream)
    this.refs.video.src = stream;
  };

  videoError= ()=> {

  };

  render() {
    return <div>
      <video src={this.state.videoSrc} autoPlay="true" ref="video"/>
    </div>;
    }
}

export default VedioCall;