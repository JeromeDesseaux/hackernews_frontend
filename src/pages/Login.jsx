import React from "react";
import { Row, Col, Typography } from 'antd';
import LoginForm from "../components/forms/LoginForm";
import image from "../images/login.jpg";
import { Container } from "../components/Styles";
import './Login.css';


const { Title } = Typography;


const Login = (props) => {
    return (
        <Row style={{height:"100vh"}} align="middle" type="flex" justify="center">
            <Col xs={0} sm={0} md={14} lg={14} xl={14} style={{height:"100vh"}}>
                <img src={image} />
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} style={{height:"100vh", alignItems:"center", justifyContent:"center", display:"flex"}}>
                <Container>
                    <Title level={2} style={{textAlign: "center", paddingBottom: "20px"}}>Welcome back on hackernews!</Title>
                    <LoginForm />
                </Container>
            </Col>
        </Row>
    )
}

export default Login;