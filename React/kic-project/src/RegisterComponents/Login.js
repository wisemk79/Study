import React,{useState} from 'react'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './login.css'

export default function Login(props) {
    const [getId, setId] = useState("")
    const [getPw, setPw] = useState("")
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        console.log("실행")
        e.preventDefault();
        if(!getId || !getPw)
          {setShow(true)
            setTimeout(() => setShow(false),5000)}      
        else
          props.onSubmit({ getId, getPw });
    }

    const handleAlert = () => (
        alert('아이디 또는 비밀번호를 입력하세요.')
        // <Modal.Dialog>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Modal title</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //         <p>Modal body text goes here.</p>
        //     </Modal.Body>

        //     <Modal.Footer>
        //         <Button variant="secondary">Close</Button>
        //         <Button variant="primary">Save changes</Button>
        //     </Modal.Footer>
        // </Modal.Dialog>
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
                                className="input-box" 
                                size="lg" 
                                type="text" 
                                placeholder="아이디를 입력해주세요."
                                onChange={(e)=>setId(e.target.value)}
                                value={getId}
                            />
                        <br />
                            <Form.Control 
                                className="input-box" 
                                size="lg" 
                                type="password" 
                                placeholder="비밀번호를 입력해주세요."
                                onChange={(e)=>setPw(e.target.value)}
                                value={getPw}
                            />
                        <br />
                            <Link className="text-link" to="/">아이디 찾기</Link> | <Link className="text-link" to="/">비밀번호 찾기</Link>
                        <br />
                            <Button className="login-button" type="submit">로그인</Button>
                        <br />
                            <Link to="/">
                                <Button className="join-button">회원가입</Button>
                            </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
            
        </>
    )
}
