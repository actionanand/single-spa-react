import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import NotesList from './NotesList';
import Search from './Search';
import Header from './Header';

import classes from './NoteRoot.module.css';

const NoteRoot = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'React is getting improved day by day. So have the fun!',
			date: '01/01/2022',
		},
		{
			id: nanoid(),
			text: 'Single-spa help us use more than one JS framework or JS library along with pure JS in a single project.',
			date: '13/02/2022',
		},
		{
			id: nanoid(),
			text: "Preact is a good alternative to React with the same modern API and it's only around 3kB.",
			date: '27/05/2022',
		},
		{
			id: nanoid(),
			text: 'react-icons is an awesome npm library, which has almost all the available icons ready for our react project.',
			date: '13/08/2022',
		},
	]);

	const localStorageName = 'single-spa-react-notes';

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem(localStorageName));

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(localStorageName, JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && classes.darkMode}`}>
			<div className={classes.container}>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default NoteRoot;