import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic_name.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className='profile_image'
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jessica Wu</div>
            <div className="brief_description">
              I am a rising junior at University of Puerto Rico Mayagüez Campus who is majoring in Computer Science an Engineering.
              A fun fact about me issssss. 

            </div>
          </div>
        </div>
      </div>
    )
  }
}