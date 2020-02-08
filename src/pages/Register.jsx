import React from "react";
import { Row, Col, Typography } from 'antd';
import RegisterForm from "../components/forms/RegisterForm";
import image from "../images/login.jpg";
import './Login.css';
import styled from "styled-components";

const Container = styled.div`
    width: 60%;
`

const { Title } = Typography;


const Register = (props) => {
    return (
        <Row style={{height:"100vh"}} align="middle" type="flex" justify="center">
            <Col xs={0} sm={0} md={14} lg={14} xl={14} style={{height:"100vh"}}>
                <img src={image} />
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} style={{height:"100vh", alignItems:"center", justifyContent:"center", display:"flex"}}>
                <Container>
                    <Title level={2} style={{textAlign: "center", paddingBottom: "20px"}}>Welcome to hackernews!</Title>
                    <RegisterForm />
                </Container>
            </Col>
        </Row>
    )
}

export default Register;