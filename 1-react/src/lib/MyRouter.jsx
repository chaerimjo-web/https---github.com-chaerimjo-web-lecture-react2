import React, { Children } from "react";
//import OrderPage from "../pages/OrderPage";
//import ProductPage from "../pages/ProductPage";
//이 부분은 어떻게 쓴거야 코드가 어딧어 ?
//이 상태에서 라우터쪽 설정만 바꾸면 될 것 같긴한데 ? 웅...내일 해도될듯 이거는 대충 원인은 알았으니깐 마무리 하구 내가 내일 안되면 또 봐줄게주석하고 어떻게해저 저 마이라우터랑 앱 제이엑스저거를 일단 저 선생님이 말한거에 맞게 다시 한번 봐봐알게ㅐㅆ오...주석은한느게맞은듯웅..
//import CartPage from "../pages/CartPage";

export const test = 123;

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export const Link = ({ to, ...rest }) => (
  <routerContext.Consumer>
    {({ path, changePath }) => {
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
    this.handleOnpopstate = this.handleOnpopstate.bind(this);
  }

  handlechangePath(path) {
    this.setState({ path });
    window.history.pushState({ path }, "", path);
  }

  handleOnpopstate(event) {
    const nextPath = event.state && event.state.path;
    if (!nextPath) return;
    this.setState({ path: nextPath });
  }

  componentDidMount() {
    window.addEventListener("popstate", this.handleOnpopstate);
    window.history.replaceState({ path: this.state.path }, "");
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handleOnpopstate);
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

export const Routes = ({ children }) => {
  return (
    <routerContext.Consumer>
      {({ path }) => {
        let selectedRoute = null;

        React.Children.forEach(children, (child) => {
          // 리액트 엘리먼트인지 검사
          if (!React.isValidElement(child)) return;

          // 프레그먼트 검사
          if (child.type === React.Fragment) return;

          // // Route 컴포넌트 검사
          if (!child.props.path || !child.props.element) return;

          // //요청 경로를 검사한다.
          if (child.props.path !== path.replace(/\?.*$/, "")) return;

          selectedRoute = child.props.element;
        });

        return selectedRoute;
      }}
    </routerContext.Consumer>
  );
};

export const Route = () => null; //데이터 저장소로서의 역할

export const withRouter = (WrappedComponent) => {
  const WithRouter = (props) => (
    <routerContext.Consumer>
      {({ path, changePath }) => {
        const navigate = (nextPath) => {
          if (path !== nextPath) changePath(nextPath);
        };

        const match = (comparedPath) => path === comparedPath;

        const enhancedProps = {
          navigate,
          match,
        };
        return <WrappedComponent {...props} {...enhancedProps} />;
}}
    </routerContext.Consumer>
  )
 return WithRouter
}