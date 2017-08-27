import React, { Component } from 'react';
import './Play.css';


function Play (props) {
        return (
            
        <div className="play-wrap">
             
                 <div className="play-container">
                <span ><img className="play-image" src= {props.photo} alt={props.nameLocation}/>
                </span>
                <div className="play-details">
                    <div className="play-name-location">{props.nameLocation}</div>
                    <div >August 25 - October 14, 2017</div>
                </div>
                <div className="ratings-container">
                    <p>Spectator Approval Rating</p>
                    <h4> {props.average} / 5 stars</h4>
                    <div className
				="star-ratings-sprite"><span style={{width: (props.average * 10 * 2) + '%'}} className="star-ratings-sprite-rating"></span></div>
                <p>{props.reviewsNumTotal} reviews</p>
                </div>
                <div >
                    <div > <a className="btn btn-primary seeMore-btn"><span>Buy Tickets</span></a></div>
                    <a onClick={() => props.onClick()} className="btn btn-primary seeMore-btn">
                        
                        { props.viewButton === true ? <span>Read Reviews</span> : <span>Hide Reviews</span>}
                        </a>
                </div>
                 </div>
            
        </div>
        )
    }


export default Play;