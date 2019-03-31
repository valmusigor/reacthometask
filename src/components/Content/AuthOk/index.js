import React, { Component } from 'react';
import * as s from './style';
import SearchField  from './SearchField';
import Video from './Video';
import searchYoutube from 'youtube-api-v3-search';
const API_KEY='AIzaSyDrhsp9XFgs61tLZx9SNIGl7FEcdGSWBRE';
class AuthOk extends Component {
constructor(props){
  super(props);
  this.state = { search: '',videos: [] };
  this.videoSearch(this.state.search);
}
 changeSearch = (event) => {
  this.setState({search:event.target.value});
 }
 videoSearch(query)
 {
  searchYoutube(API_KEY, {
    q:query,
    part:'snippet',
    type:'video'
  },  (errors, videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });});
 }
  handleClick = () => {
    this.videoSearch(this.state.search);
  }


  render(){
    return(
  <s.Container>
    <SearchField search={this.state.search} clickSearch={this.handleClick} changeSearch={this.changeSearch}/>
    <Video readyPlayer={this._onReady} sourceImage={this.state.videos} />
  </s.Container>
  );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  //onReadyList(event) {
    // access to player in all event handlers via event.target
   // event.target.cuePlaylist({listType:'search', list:'босая'});
 // }
};

export default AuthOk;
