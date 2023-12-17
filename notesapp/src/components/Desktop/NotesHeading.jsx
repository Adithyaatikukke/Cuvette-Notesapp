import React from "react";
import "./DStyles.css";
const NotesHeading = ({ title, selected, setSelected }) => {
	const initials = title[0].name
	  .split(" ")
	  .map((word) => word.charAt(0).toUpperCase())
	  .join("");
  
	const handleTitleClick = () => {
	  setSelected(initials);
	};
  
	return (
	  <div
		onClick={handleTitleClick}
		className={`group_title_logo ${
		  selected === initials ? "highlighted_title" : ""
		}`}
	  >
		<div className="title_logo" style={{ backgroundColor: title[0].color }}>
		  {initials}
		</div>
		<div className="group_title">{title[0].name}</div>
	  </div>
	);
  };
  
  export default NotesHeading;
  
