import React from 'react';
import Contact from '../Contact/Contact'



let users = [
	{
		name: "Tom Jacobs",
		avatar: "https://randomuser.me/api/portraits/men/99.jpg" 
	},{
		name: "Louise Stephens",
		avatar: "https://randomuser.me/api/portraits/women/93.jpg"
	},{
		name: "Teresa Harris",
		avatar: "https://randomuser.me/api/portraits/women/65.jpg"
	},{
		name: "Elijah Rhodes",
		avatar: "https://randomuser.me/api/portraits/men/74.jpg"
	},{
		name:"Brad Craig",
		avatar: "https://randomuser.me/api/portraits/men/11.jpg"
	}]

const ContactList = () => (
	<div>
		{users.map(user => (
			<Contact avatar={user.avatar} name={user.name}/>
		))}
	</div>);




	export default ContactList;