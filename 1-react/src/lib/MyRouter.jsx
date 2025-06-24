import React from "react";

const routerContext = React.createContext({});

export const Link = ({ to, ...rest }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return <a {...rest} href={to} onClick={handleClick} />;
};

export class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: window.location.pathname,
    };
    this.handlechangePath = this.handlechangePath.bind(this);
  }

  handlechangePath(path) {
    this.setState({ path });
  }

  render() {
    const contextValue = {
      path: this.state.path,
      changePath: this.handlechangePath,
    };
    return (
      <routerContext.Provider value={contextValue}>
        {this.props.children}
      </routerContext.Provider>
    );
  }
}
