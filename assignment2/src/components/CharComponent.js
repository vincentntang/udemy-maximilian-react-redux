import React from "react";

class CharComponent extends React.Component {
  render() {
    const { input } = this.props;
    let charInput = input.split("");
    console.log(charInput);
    return (
      <div>
        {this.props.input.length > 5 ? "Text Too Long" : this.props.input}
      </div>
    );
  }
}

export default CharComponent;
