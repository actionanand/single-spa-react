import React from 'react';

import classes from './Header.module.css';

const Header = ({ title:spaTitle, handleToggleDarkMode }) => {
	return (
		<div className={classes.header}>
			<h1> { spaTitle } </h1>
			{/* <button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className={classes.save}
			>
				Toggle Mode
			</button> */}
		</div>
	);
};

export default Header;
