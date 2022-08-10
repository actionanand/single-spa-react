import React from 'react';

import { getData, state$ } from '@actionanand/utility';

export default function Root(props) {
  console.log(props);

  let angTodo = 'My new Todo';

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

  const handleClick = () => {
    const event = new CustomEvent('react', { detail: {angTodo} });
    window.dispatchEvent(event);
  }

  return (
    <div>
      <section>{props.name} is mounted!</section>
      <button onClick={handleClick}>cool</button>
    </div>
  );
}
