import React from "react";
import createEventEmitter from "../../../shared/lib/EventEmitter";

const MyReact = function () {
  function createContext(initailValue) {
    const emitter = createEventEmitter(initailValue);

    /* 프로바이더 컴포넌트 = 빌류와 칠드런의 인자를 바든다. 칠드런을 렌더링 해준다.
		-> 데이터를 전달해주는 공급자 역할 */
    class Provider extends React.Component {
      componentDidMount() {
        emitter.set(this.props.value);
      }

      componentDidUpdate() {
        emitter.set(this.props.value);
      }

      render() {	
        return <>{this.props.children}</>;
      }
    }

    /* 소비하는 역할
		컨슈머 = 칠드런을 인자로 받고, 칠드런을 렌더프롭으로 사용한다. 
		-> 에미터의 값을 전달해주기 위해  */
    class Consumer extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          value: emitter.get(),
        };
        this.setValue = this.setValue.bind(this);
      }

      setValue(nextValue) {
        this.setState({ value: nextValue });
      }

      componentDidMount() {
        emitter.on(this.setValue); //이벤트등록
      }

      componentWillUnmount() {
        emitter.off(this.setValue);
      }

      render() {
        return <>{this.props.children(this.state.value)}</>;
      }
    }

    /* 크리에이트컨택스트 -> 프로바이더 컨슈머로 이루어진 객체 */
    return {
      Provider,
      Consumer,
    };
  }

  /* myreact
		컨택스트를 만드는 createContext 팩토리 함수를 제공하는 모듈 */
  return {
    createContext,
  };
};

export default MyReact;
