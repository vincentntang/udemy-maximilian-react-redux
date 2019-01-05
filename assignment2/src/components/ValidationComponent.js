import React from "react";

class ValidationComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.input.length > 5 ? "Text Too Long" : this.props.input}
      </div>
    );
  }
}

export default ValidationComponent;
