import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { isLoggedIn } from "../../utils/helpers";
import { useAuth } from '../../contexts/AuthContext';

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {

    const authContext = useAuth();

    const logout = () => {
        authContext.logout();
        props.history.push('/login');
    }

    return (
        <Layout className="layout" style={{height:"100vh", overflow: "auto"}}>
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                {
                    isLoggedIn() ? 
                    <Menu.Item key="1" onClick={() => logout()}>Logout</Menu.Item> :
                    <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
                }
            </Menu>
            </Header>
            {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                { props.children }
            </div> */}
            <div style={{ padding: 24, minHeight: "86vh" }}>
                { props.children }
            </div>
            {/* <Content style={{ padding: '0 50px', margin: '16px 0' }}>
            </Content> */}
            <Footer style={{ textAlign: 'center',  bottom:"0" }}>Jérôme Desseaux ©2020</Footer>

        </Layout>
    );
}

export default withRouter(MainLayout);