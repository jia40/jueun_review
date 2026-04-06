//  [hooks-usestate]
//     1. React.useState()
//      1) 함수형 컴포넌트에서 상태(state)를 선언하고 관리하기 위한 훅 
//      2) useState()는 배열을 반환하며, 반환하는 배열의 첫 번째 요소는 현재 상태 값, 두 번째 요소는 상태 값을 변경하는 함수
//     2. React.useState() 구문
//        -> const [state, setState] = React.useState(initialState)
//       state: 상태 변수의 이름,state가 변하면 state가 사용되는 컴포넌트가 리렌더링
//       setState: 상태 변수 값을 변경하는 상태 업데이트 함수
//       initialState: 상태 변수 초깃값

//     [hooks-useEffect]
//     1. React.useEffect() 
//     1) 함수형 컴포넌트에서 사이드 이펙트를 처리하기 위한 훅.
//     2) 사이드 이펙트는 데이터 가져오기(API 호출), 구독 설정, DOM 직접 수정, 타이머 설정 등 
//        컴포넌트 외부와 상호작용하거나 비동기 로직을 실행하는 작업을 의미한다
//     2. React.useEffect() 구문
//       -> React.useEffect(setup[, dependencies]);
//     2) 설명
//       (1) setup
//         - 사이드 이펙트가 동작할 코드가 작성된 함수입니다.
//       (2) dependencies
//         - 의존성 배열입니다. 필수가 아닌 선택 인자입니다.
//         - setup 함수에서 사용하는 모든 반응형 값(props, state, 변수, 함수 등)이 포함될 수 있다
//   3. 의존성 배열(dependencies)에 따른 사이드 이펙트 실행 시점
//     1) 의존성 배열이 없는 경우: 컴포넌트가 렌더링될 때마다 실행
//     2) 의존성 배열이 빈 배열([])인 경우: 컴포넌트가 처음 마운트될 때 한 번만 실행 
//     3) 의존성 배열에 특정 값이 있는 경우: 해당 값이 변경될 때마다 실행 

//   [hooks-useContext]
//   1. React.createContext()
//     1) 컨텍스트(Context) 객체를 생성할 수 있다. 
//     2) 여기서 컨텍스트란 컴포넌트에서 제공하거나 읽을 수 있는 정보를 의미한다.
//     3) 컴포넌트 트리 전체에 데이터를 전달할 수 있도록 해주는 Context API의 핵심 함수
//     4) createContext를 사용하면 여러 단계의 컴포넌트에 props를 일일이 전달하지 않고도(props drilling 회피), 원하는 값을 하위 컴포넌트에서 바로 사용할 수 있다.
//     5) 컨텍스트 객체에는 Provider와 Consumer 컴포넌트가 포함되어 있다.
//       (1) Provider 컴포넌트는 value prop을 통해 하위 컴포넌트에 값을 제공한다. 하위 트리의 모든 컴포넌트에서 이 값을 사용할 수 있다.
//       (2) 하위 컴포넌트에서는 React.useContext(Context) 또는 Context.Consumer를 통해 값을 읽을 수 있다. 함수형 컴포넌트에서는 React.useContext(Context) 사용이 더 간편하다.
//   2. React.createContext() 구문
//      ->const context = React.createContext(defaultValue)
//       context: 컨텍스트(Context) 객체, 다른 컴포넌트가 읽거나 다른 컴포넌트에게 제공할 정보를 나타냅니다.
//       (2) defaultValue: 상위에 Provider 컴포넌트가 없을 때만 사용되는 기본값
//   3. React.useContext()
//     1) 컴포넌트에서 컨텍스트(Context)를 구독하여 해당 컨텍스트에 저장된 내용을 확인할 수 있는 훅(Hooks) 입니다.
//     2) Context API를 통해 전역 데이터(예: 테마, 사용자 정보 등)를 props 없이 여러 컴포넌트에서 공유할 때 사용한다.
//     3) useContext(SomeContext)를 호출하면, 트리 상에서 가장 가까운 <SomeContext.Provider>의 value를 반환한다.
//     4) Provider가 없으면, createContext에 지정한 defaultValue를 반환한다. 대신 Provider가 value로 undefined를 명시적으로 전달하면 defaultValue는 반환되지 않고, undefined가 반환됩니다.
//     5) 값이 바뀌면, 해당 Context를 구독하는 컴포넌트가 자동으로 리렌더링된다..
//   4. React.useContext() 구문
//      -> const value = React.useContext(SomeContext)
//       value: 컴포넌트 트리 중 가장 가까운 위쪽 컴포넌트에서 호출한 <SomeContext.Provider>에 전달한 value로 결정한다.
//       SomeContext: React.createContext()를 이용해 생성한 컨텍스트

//     [hooks-useMemo]
//     1. React.useMemo()
//     1) 계산 비용이 높은 연산의 결과를 메모이제이션하여, 컴포넌트가 리렌더링될 때마다 불필요하게 같은 연산을 반복하지 않도록 성능을 최적화하는 훅
//     2) 계산이 오래 걸리는 경우 해당 계산 결과를 캐싱해 두면 리렌더링할 때 재계산을 생략할 수 있다.
//     3) 반환할 계산 결과를 캐싱해 두는 것을 메모이제이션이라고 한다.
//     4) 주요 특징
//       (1) 메모이제이션: 의존성 배열에 명시된 값이 변경되지 않으면, 이전에 계산된 값을 재사용한다.
//       (2) 렌더링 최적화: 불필요한 연산을 줄여 컴포넌트의 렌더링 성능을 향상시킵니다.
//       (3) 참조 동일성 유지: 객체나 배열과 같은 참조형 데이터를 useMemo로 감싸면, 리렌더링 시에도 동일한 참조를 유지할 수 있어 불필요한 자식 컴포넌트의 렌더링을 방지할 수 있다.
//     2. React.useMemo() 구문
//       ->const memoizedValue = React.useMemo(calculateValue, [dependencies])
//        memoizedValue: 최초 렌더링 시 calculateValue 함수가 반환한 값으로 리렌더링 시 의존성 배열(dependencies)에 명시된 값이 변경되지 않으면 이전에 저장된 memoizedValue를 그대로 사용한다.
//        calculateValue:  계산 비용이 높은 연산을 수행하는 함수.
//       dependencies: 의존성 배열, 선택 인자이지만 사실상 필수 인자입니다.
  
//     [hooks_useRef]
//     1. React.useRef()
//     1) 함수형 컴포넌트에서 DOM 요소에 직접 접근하거나, 리렌더링과 무관하게 값을 저장할 때 사용하는 훅
//     2) useRef에 의해서 반환된 값은 변경되더라도 리렌더링이 되지 않는다.
//   -> 의존성 배열을 설정할 수 없음(usememo는 의존성배열을 통해서 사용한다.)
//   -> 리렌더링되도 값의 변경이 없음(usemomo랑 달리)
//   2. React.useRef() 구문
//       ->const ref = React.useRef(initialValue)
//       (1) ref: 반환 객체 ref는 { current: initialValue } 형태로 컴포넌트가 리렌더링되더라도 동일하게 유지된다.
//       (2) initialValue: 반환 객체 ref의 current 프로퍼티에 저장하는 초기값