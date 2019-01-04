import React from "react";

const UserInput = props => (
  <div>
    <input type="text" onChange={props.changed} />
  </div>
);

export default UserInput;
