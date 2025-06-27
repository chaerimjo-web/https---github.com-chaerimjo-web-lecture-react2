import React from "react";
import Dialog from "../components/Dialog";
import Backdrop from "../components/Backdrop";
import { getComponentName } from "./utils";

export const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // dialog: null,
      dialog: <Dialog />,
    };
    this.setDialog = this.setDialog.bind(this);
  }

  setDialog(dialog) {
    this.setState({ dialog });
  }

  render() {
    const value = {
      dialog: this.state.dialog,
      setDialog: this.setDialog,
    };

    return (
      <layoutContext.Provider value={value}>
        {this.props.children}
      </layoutContext.Provider>
    );
  }
}

export const DialogContainer = () => (
  <layoutContext.Consumer>
    {({ dialog }) => dialog && <Backdrop>{dialog}</Backdrop>}
  </layoutContext.Consumer>
);

export const withLayout = (WrappedComponent) => {
  const WithLayout = (props) => {
    return (
      <layoutContext.Consumer>
        {({ dialog, setDialog }) => {
          const openDialog = setDialog;
          const closeDialog = () => setDialog(null);

          const enhancedProps = {
            dialog,
            openDialog,
            closeDialog,
          };

          return <WrappedComponent {...props} {...enhancedProps} />;
        }}
      </layoutContext.Consumer>
    );
  };
  WithLayout.displayName = `WithLayout(${getComponentName(WrappedComponent)})`;
  return WithLayout;
};
