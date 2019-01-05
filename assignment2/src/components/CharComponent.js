import React from "react";

class CharComponent extends React.Component {
  render() {
    const { input, removeCharFromText } = this.props;
    let charInput = input.split("");
    return (
      <div className="charDisplay">
        {charInput.map(char => {
          return <button onClick={removeCharFromText}>{char}</button>;
        })}
        <style jsx>{`
        .charDisplay {
          color: red;
        `}</style>
      </div>
    );
  }
}

export default CharComponent;
