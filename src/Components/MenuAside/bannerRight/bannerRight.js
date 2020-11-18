import React, { Component } from 'react'
import './bannerRight.css'
export default class BannerRight extends Component{
  constructor(props) {
      super(props)
  }
  render(){
    return(
      <div className="banner_right_carousel" style={{width:'412px'}}>
        <div style={{ width: '50%', height: '181px' }}>
          <a><img src='https://salt.tikicdn.com/cache/w206/ts/banner/f1/69/da/ce2a15feda2ef16194c7d34f6e8a43c5.png' /></a>
        </div>
        <div style={{ width: '50%', height: '181px' }}>
          <a><img src='https://salt.tikicdn.com/cache/w206/ts/banner/54/4e/14/44d3c68bc6b733058b50dceb139ef871.png' /></a>
        </div>
        <div style={{ width: '50%', height: '181px' }}>
          <a><img src='https://salt.tikicdn.com/cache/w206/ts/banner/33/4f/2b/b7b0b3f653fa80d817ba9360c4ff6991.png' /></a>
        </div>
        <div style={{ width: '50%', height: '181px' }}>
          <a><img src='https://salt.tikicdn.com/cache/w206/ts/banner/0b/11/13/a3345f04803086d0941d8977d0058e9d.png' /></a>
        </div>
        <div style={{ width: '50%', height: '181px' }}>
          <a><img src='https://salt.tikicdn.com/cache/w206/ts/banner/87/d3/f6/151b2d43bdeca9cbdffd0c21d055cb82.png' /></a>
        </div>
        <div style={{ width: '50%', height: '181px' }}>
          <a><img src='https://salt.tikicdn.com/cache/w206/ts/banner/cb/4d/48/6a09c4e3fee497f2a027fec6599cca44.png' /></a>
        </div>
      </div>
    )
  }
}