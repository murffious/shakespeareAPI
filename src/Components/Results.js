import React from 'react'
import StarRatings from './StarRatings';

export default function Results(props) {
	return (
			<tr>

				<td>{props.rating}</td>
				<td>{props.publish_date}</td>
				<td>{props.id}</td>
				<td onClick={() => props.cb(props.id)}>{props.author}</td>
				<td><StarRatings/></td>
			</tr>
	)
}