const express = require('express')
const app = express()
const cors = require('cors');


app.use(cors());
//cors괄호 안에 아무것도 없으면, 어떤 origin이든 막지 않겠다!는 의미

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing 

let id = 2;
const todoList = [{
    id: 1,
    text: '할일 1',
    done: false,
}]; //todoList라는 데이터를 서버의 메모리에 저장

app.get('/api/todo', (req, res) => {
    res.json(todoList);
}) ///api/todo라는 곳으로 GET 요청을 하면, todoList를 리턴

app.post('/api/todo', (req, res) => {
    const { text, done } = req.body; //데이터 꺼내오기
    todoList.push({
        id: id++,
        text,
        done,
    })
    return res.send('success');
})

app.listen(4000, () => {
    console.log('server start!!'); //서버가 잘 실행되었는지 확인하는 callback 함수
})

//npm 사이트 내 express 검색하여 샘플코드 붙여넣음
//서버주소 : http://localhost:4000/
//cors 라이브러리 설치 및 사용