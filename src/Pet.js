import React from 'react';

export default function Pet({ name, animal, breed }) {
  //props.name, props.animal or destructing etc..takes the attributes from the stamp and passes it in as a argument
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
