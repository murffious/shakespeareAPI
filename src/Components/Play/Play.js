import React, { Component } from 'react';
import './Play.css';


function Play (props) {
        return (
            
        <div className="play-wrap">
             
                 <div className="play-container">
                <span ><img src= {require("../../assets/hamlet-88.jpg")} alt="The Heart of Robin Hood - West Valley City"/>
                </span>
                <div className="play-details">
                    <div className="play-name-location">Hamlet - West Valley City</div>
                    <div >August 25 - October 14, 2017</div>
                </div>
                <div>
                    <p>Actual Spectator Approval Rating</p>
                <h1> {props.average} out of 5 stars</h1><p>{props.reviewsNumTotal} Total reviews</p>
                </div>
                <div >
                    <div ></div>
                    <a onClick={()=> props.viewAllRatings()} className="btn btn-primary seeMore-btn"><span>View Reviews</span></a>
                </div>
                 </div>
            
        </div>
        )
    }


export default Play;