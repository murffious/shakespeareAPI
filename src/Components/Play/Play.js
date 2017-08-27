import React, { Component } from 'react';
import './Play.css';


function Play (props) {
        return (
            
        <div className="play-wrap">
             
                 <div className="play-container">
                <span ><img src= {props.photo} alt={props.nameLocation}/>
                </span>
                <div className="play-details">
                    <div className="play-name-location">{props.nameLocation}</div>
                    <div >August 25 - October 14, 2017</div>
                </div>
                <div>
                    <p>Actual Spectator Approval Rating</p>
                    <div className
				="star-ratings-sprite"><span style={{width: (props.average * 10 * 2) + '%'}} className="star-ratings-sprite-rating"></span></div>
                <h1> {props.average} out of 5 stars</h1><p>{props.reviewsNumTotal} Total reviews</p>
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