import React from 'react';
import {  ListItem, Text, Left, Right, Icon } from 'native-base';
const MovieListItem = ({ item }) => (
	<ListItem noIndent onPress={()=>{}} style={{ backgroundColor: "f8f8" }}>
		<Left>
			<Text>{item.title}</Text>
		</Left>
		<Right>
			<Icon name="arrow-forward" />
		</Right>
	</ListItem>

);
export default MovieListItem;
