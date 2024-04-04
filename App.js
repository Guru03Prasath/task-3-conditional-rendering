import React from 'react';

class ConditionalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h1>Welcome User!</h1>
        ) : (
          <h1>Please log in to continue.</h1>
        )}
      </div>
    );
  }
}

export default ConditionalComponent;
