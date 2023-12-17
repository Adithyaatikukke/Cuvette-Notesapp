import React from "react";
import logo from "../../../assets/logo.png";
import lock from "../../../assets/lock.png";
import "../DStyles.css";

const DHome = () => {
	return (
		<div className="d_container">
			<img className="logo" src={logo}/>
			<h1>Pocket Notes</h1>
			<p>
				Send and receive messages without keeping your phone online.
				<br />
				Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.
			</p>
			<div className="last">
				<img className="lock" src={lock}/>
				<span className="eee"> end-to-end encrypted</span>
			</div>
		</div>
	);
};

export default DHome;