import React from 'react';
import moment from 'moment';

export const TodoCell = ({item}) => (
	<li>
		<p>{ item.message } สร้างเมื่อ { moment(item.createAt).fromNow() }</p>
	</li>
);