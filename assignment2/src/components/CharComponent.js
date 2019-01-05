import React from "react";

class CharComponent extends React.Component {
  render() {
    const { input } = this.props;
    let charInput = input.split("");
    return (
      <div className="charDisplay">
        {charInput.map(char => {
          return <p>{char}</p>;
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
