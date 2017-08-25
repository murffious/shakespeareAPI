import React from 'react'
import Moment from 'react-moment';

export default function Results(props) {
	let dateToFormat = props.publish_date;
	return (
		// onClick={() => props.cb(props.id)}
			<div className="card">
				<div className="ratingsCardHead"><p>{props.author} rated it </p> <div className="star-ratings-sprite"><span style={{width: (props.rating * 10 * 2) + '%'}} className="star-ratings-sprite-rating"></span></div>
				
			    
				{/* {props.rating} */}
				<span><Moment format="MMM DD, YYYY" date={dateToFormat} /></span>
				{/* <td>{props.id}</td> */}
				</div>
				<p>{props.reviews}</p>
		</div>
	)
}