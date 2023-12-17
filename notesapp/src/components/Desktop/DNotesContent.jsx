import React from "react";
import "./DStyles.css";

const DNotesContent = ({ note }) => {
	return (
		<div className="dnotes_note">
			<div className="dnotes_details">
				<p>{note.content}</p>
			</div>
			<div className="dnotes_date_time_details">
				<div className="dnotes_date">{note.date}</div>
				<div className="dnotes_time">{note.time}</div>
			</div>

		</div>
	);
};

export default DNotesContent;