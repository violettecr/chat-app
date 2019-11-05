import React from 'react';
import './Contact.css';



class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			avatar : this.props.avatar,
			name: this.props.name,
			onLine : false
		};
	}
	render() {
		return (
		<div className="Contact">
			<img className="avatar" src={this.state.avatar} alt={this.state.name}/>
		<div>
			<div className="name">{this.state.name}</div>
			<div className={this.state.onLine ? 'status-online' : 'status-offline'}
				onClick={event => {
					const offLine = !this.state.onLine;
					this.setState({ onLine: offLine });
				}}> 
			</div>
		</div>
		</div>
		
	)
}}


export default Contact;

