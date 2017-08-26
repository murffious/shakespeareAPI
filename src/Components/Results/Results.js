import React from 'react'
import Moment from 'react-moment';

export default function Results(props) {
	// console.log(props)
	let dateToFormat = props.publish_date;
	// var selectedId = props.id; // id what you need to find
	// var reviewPage = props.review.reduce(function(review, current) {
	// 	return review.id == selectedId ? current : review;
	// }, undefined);
	return (
		
			<div className="card">
				<div className="ratingsCardHead"><span className="rating-author">{props.author}</span><span><Moment format="MMM DD, YYYY" date={dateToFormat} /></span>
				
				{/* <td>{props.id}</td> */}
				</div>
				<p> rated it ({props.rating}) </p> 
				<div className
				="star-ratings-sprite"><span style={{width: (props.rating * 10 * 2) + '%'}} className="star-ratings-sprite-rating"></span></div>
				<a onClick={() => props.cb(props.id)} className="btn btn-primary"><span>Read More</span></a>
				{ props.selectedId === props.id ? <p >"{props.review}"</p> : null}
		</div>
	)
}