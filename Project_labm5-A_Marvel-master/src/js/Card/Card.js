import React from "react";
import Image from "../Image";
import logo from "../../Images/Marvel_Studios_logo.jpg"

export default function Card({imageURL, isFlipped, onClick}) {
	return <div className="card-container" onClick={onClick}>
		<div className={"card" + (isFlipped ? " flipped" : "")}>
			<Image className="side front" src={logo}/>
			<div className="side back"/>
		</div>
	</div>;
}