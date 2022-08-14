import React, { useState } from 'react';

import { getData, state$ } from '@actionanand/utility';

import classes from './root.component.module.css';

import NoteRoot from './components/NoteRoot';

export default function Root(props) {
  // console.log(props);

  let angTodo = '';

  const [todo, setTodo] = useState(angTodo);

  React.useEffect(() => {
    getData('/data').then(data => {
      console.log('react ', data);
    });

    const utiSub = state$.subscribe((resp) => {
      console.log('React ', resp);
    });

    return () => {
      utiSub.unsubscribe();
    }

  });

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    if (todo.trim()) {
      angTodo = todo;
      const event = new CustomEvent('react', { detail: {angTodo} });
      window.dispatchEvent(event);
    }
    angTodo = '';
    setTodo(angTodo);

    event.preventDefault();
  };

  return (
    <div className={classes.reactWrap}>
      {/* <section>{props.name} is mounted!</section> */}
      <form onSubmit={handleSubmit} className={classes.reactForm}>
        <input type='text' placeholder='Your todo' value={todo} onChange={handleChange} 
          className={classes.todoInput} />
        <button type='submit' className={classes.todoBtn}> Add to my todo </button>
      </form>
      <NoteRoot/>
    </div>
  );
}
