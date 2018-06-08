import React from 'react';

export default function Child(props) {
  return (
    <div>
      <h3>Brought To You By The Child Component!</h3>
      <button onClick={props.getStuff}>Get All the Things</button>
      <button onClick={props.getCats}>Get Another Cat</button>
    </div>
  )
}