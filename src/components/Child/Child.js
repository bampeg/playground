import React from 'react';

export default function Child(props) {
  return (
    <div>
      <h3>
        This button brought to you by the Child Component!
        </h3>
      <button onClick={props.getStuff}>Get All the things</button>
    </div>
  )
}