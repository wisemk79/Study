import React,{useState, useEffect} from 'react'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
import './Login.css'

export default function Login(props) {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [show, setShow] = useState(false)
    const [logged, setLogged] = useState(false)
    
    useEffect(()=>{
        if(logged !== props.logged)
        setLogged(props.logged)
    })
    
    const handleSubmit = (e) => {
        console.log("실행")
        e.preventDefault();
        if(!id || !pw)
          {setShow(true)
            setTimeout(() => setShow(false),5000)}      
        else
          props.onSubmit({ id, pw });
    }

    const handleAlert = () => (
        alert('아이디 또는 비밀번호를 입력하세요.')
        )

    return (
        <>
        {show && handleAlert}
        <Container className="login-container">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                            <h3>로그인</h3>
                        <br/>
                            <Form.Control 
                                className="login-input-box" 
                                size="lg" 
                                type="text" 
                                placeholder="아이디를 입력해주세요."
                                onChange={(e)=>setId(e.target.value)}
                                value={id}
                            />
                        <br />
                            <Form.Control 
                                className="login-input-box" 
                                size="lg" 
                                type="password" 
                                placeholder="비밀번호를 입력해주세요."
                                onChange={(e)=>setPw(e.target.value)}
                                value={pw}
                            />
                        <br />
                            <Link className="text-link" to="/">아이디 찾기</Link> | <Link className="text-link" to="/">비밀번호 찾기</Link>
                        <br />
                            <Button className="login-button" type="submit">로그인</Button>
                        <br />
                            <Link to="/join">
                                <Button className="join-button">회원가입</Button>
                            </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
        {logged && <Redirect to="/"/>}

            
        </>
    )
}
