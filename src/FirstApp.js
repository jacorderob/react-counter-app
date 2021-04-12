import React from 'react';

const FirstApp = () => {

  const greeting = 'Hi! Waraaap'

  const obj = {
    name: 'Andrés',
    age: 29
  }

  return (
    <>
      <h1>{greeting}</h1>
      <h2>{JSON.stringify(obj)}</h2>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
      <p>Mi primera aplicacion</p>
    </>
  );
}

export default FirstApp;
