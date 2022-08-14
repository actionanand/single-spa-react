import { MdDeleteForever } from 'react-icons/md';

import classes from './Note.module.css';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className={classes.note}>
			<span>{text}</span>
			<div className={classes.noteFooter}>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className={classes.deleteIcon}
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
