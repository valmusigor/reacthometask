import React, { Component } from 'react';
import YouTube from 'react-youtube';
import opts from './config';
import * as s from './style';


class Video extends Component {
 constructor(props){
  super(props);
  if(typeof this.props.sourceImage.items == "undefined" )
  {
  this.state={play:"2g811Eo7K8U"}
  }
 }
onPlay=(event)=>{
 this.setState({play:event.target.id});
}
 render(){
    let mas = [];
  if(typeof this.props.sourceImage.items == "undefined" )
  {
    console.log('error');
  }
  else{
    console.log(this.props.sourceImage.items);
   // this.setState({play:this.props.sourceImage.items[0].id.videoId});
    this.props.sourceImage.items.forEach(function(elem){
        mas.push({src:elem.snippet.thumbnails.default.url,
        id:elem.id.videoId, title:elem.snippet.title
        });
    });
    console.log(mas);
    
  }
  
    return(
  <s.Wrapper>
    <s.Player>
      <YouTube
        videoId={this.state.play}
        opts={opts}
        onReady={this.props.readyPlayer}
      />
    </s.Player>
    <s.List >
    {mas.map(elem => 
      <s.Item  onClick={this.onPlay}>
        <div>
        <img src={elem.src} id={elem.id}/>
        </div>
        <div>
          hellllos  {elem.title}
        </div>
      </s.Item>)}
      </s.List>
  </s.Wrapper>);
 }
};

export default Video;
