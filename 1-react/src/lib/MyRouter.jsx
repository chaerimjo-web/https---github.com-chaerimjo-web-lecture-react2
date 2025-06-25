import React from "react";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export const Link = ({ to, ...rest }) => (
  <routerContext.Consumer>
    {({ to, changePath }) => {
      const handleClick = (e) => {
        e.preventDefault();
        if (to !== path) changePath(to);
      };

      return <a {...rest} href={to} onClick={handleClick} />;
    }}
  </routerContext.Consumer>
);
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
