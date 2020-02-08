import React from "react";
import { Layout } from 'antd';

const { Content, Footer } = Layout;

const SideLayout = (props) => {
    return (
        <Layout className="layout" style={{height:"100vh", margin: "0"}}>
            <Content style={{ padding: '0 0', background: "white" }}>
                { props.children }
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Créé avec amour par Jérôme Desseaux</Footer> */}
        </Layout>
        )
    }

export default SideLayout;