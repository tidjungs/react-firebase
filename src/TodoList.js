import React, { Component } from 'react';
import { TodoCell } from './TodoCell.js';

export default class TodoList extends Component {
	render() {
		return (
			<ul>
				{ this.props.items.map((item, index) => <TodoCell item={ item } key={ index } /> )}
			</ul>
		)
	}
}