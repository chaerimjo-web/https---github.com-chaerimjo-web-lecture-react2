/* **이벤트 발생기(Event Emitter)**를 만드는 팩토리 함수 */
/* createEventEmitter는 내부 상태 값(value)을 관리하면서, 이 값이 변경될 때 등록된 핸들러(콜백 함수)들을 실행해주는 구조 */

const createEventEmitter = (value) => {
  let handlers = [];

  const on = (handler) => handlers.push(handler);
  const off = (handler) => {
    handlers = handlers.filter((h) => h !== handler);
  };

  const get = () => value;
  const set = (newValue) => {
    value = newValue;
    handlers.forEach((handler) => handler(value));
  };

  return {
    on,
    off,
    get,
    set,
  };
};

export default createEventEmitter;
