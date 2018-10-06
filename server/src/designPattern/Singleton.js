let Singletonify = function (cons) {

  // 유일 객체 변수
  let INSTANCE

  // 클로저 생성
  let c = function () {
    // 유일 객체가 정의되지 않았다면 객체를 생성.
    if (INSTANCE === undefined) {

      // 여기서부터 new 연산자의 내용을 흉내냅니다.

      // 새 함수를 선언하고 인자로 전달받은 함수의 프로토타입으로 연결합니다.
      let F = function () { }
      F.prototype = cons.prototype

      // 객체를 생성하고 생성된 객체를 컨텍스트로 호출합니다.            
      let t = new F()
      let ret = cons.new.apply(t, Array.prototype.slice.call(arguments))

      // 이때, 반환값이 객체이면 객체를, 아니라면 위의 객체를
      // 생성 객체로 지정합니다.
      INSTANCE = (typeof ret === 'object') ? ret : t
    }

    // 객체를 리턴합니다.
    return INSTANCE
  }

  // 팩토리 메서드로도 접근할 수 있게 합니다
  c.getInstance = function () {
    return c.apply(null, Array.prototype.slice.call(arguments))
  }

  // 생성자를 대체한 클로저를 리턴
  return c
};

module.exports = Singletonify