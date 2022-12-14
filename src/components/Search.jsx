import React from 'react';

import { MdSearch } from 'react-icons/md';

import classes from './Search.module.css';

const Search = ({ handleSearchNote }) => {
	return (
		<div className={classes.search}>
			<MdSearch className={classes.searchIcons} size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
