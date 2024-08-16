//서버에 데이터 요청을 하는 방법

import { useEffect, useState } from 'react';

//기본 api가 fetch, 라이브러리는 axios
function App() {
  const [todoList, setTodoList] = useState([]);
  //서버주소(url), HTTP 메소드(method) 필요
 useEffect(() => {
 fetch('http://localhost:4000/api/todo')
  .then((response) => response.json())
  .then((data) => setTodoList(data));
}, []);
  //react 컴포넌트는 상태가 바뀌면 리렌더링을 한다.
  //무한 서버 요청과 리턴을 반복하지 않도록 
  //패치가 최초 컴포넌트 한번 렌더링 될 때만 실행되도록 useEffect 사용

  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
/*오류 : cors 정책 문제 (cross origin resource sharing)
Client : localhost:3000 (react 개발 서버)
Server : localhost:4000
이 둘의 origin(=출처, port)가 다르기 때문에 발생
서버에서 해결해야 함.
*/
