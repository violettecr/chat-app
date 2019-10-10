import React from 'react';
import './Contact.css';


const Contact = (props) => {
	return(
	<div className="Contact">
		<img className="avatar" src={props.avatar} alt={props.name}/>
		<div>
			<div className="name">{props.name}</div>
			<div className="status">

				{props.online ?
				
					<div className="toto">
						<div className="status-online"></div>
						<div className="status-text">Online</div>
					</div>
				
				: 
				
				<div className="toto">
						<div className="status-offline"></div>
						<div className="status-text">Offline</div>
					</div>
				}
			</div>
		</div>
	</div>
	)
}

export default Contact;

