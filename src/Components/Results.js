import React from 'react'
import StarRatings from './StarRatings';

export default function Results(props) {
	return (
			<tr>

				<td>{props.rating}</td>
				<td>{props.publish_date}</td>
				<td>{props.id}</td>
				<td onClick={() => props.cb(props.id)}>{props.author}</td>
				<td><div className="star-ratings-sprite"><span style={{width: (props.rating * 10 * 2) + '%'}} className="star-ratings-sprite-rating"></span></div></td>
			</tr>
	)
}