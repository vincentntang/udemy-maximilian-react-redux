import React from "react";

class CharComponent extends React.Component {
  render() {
    const { input, removeCharFromText } = this.props;
    let charInput = input.split("");
    return (
      <div className="charDisplay">
        {charInput.map((char, index) => {
          return (
            <p key={index} onClick={() => removeCharFromText(index)}>
              {char}
            </p>
          );
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
