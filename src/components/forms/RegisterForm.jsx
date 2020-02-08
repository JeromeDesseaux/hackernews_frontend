import React, { useState }from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { SpacedWrapper } from "../Styles";
import { useAuth } from "../../contexts/AuthContext";


const RegisterForm = (props) =>  {

  const [ loading, setLoading ] = useState(false); 
  const authContext = useAuth();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await props.form.validateFields(async (err, values) => {
      if (!err) {
        await authContext.register(values.username, values.password);
        console.log('Received values of form: ', values);
      }
    });
    setLoading(false);
  };
  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" block loading={loading}>
          Register
        </Button>
      </Form.Item>
      <SpacedWrapper>
          <Link to="/login">Log in</Link>
      {/* <a className="login-form-forgot" href="" >
          Forgot password
        </a> */}
      </SpacedWrapper>
    </Form>
  );
}

const WrapperRegisterForm = Form.create({ name: 'register' })(RegisterForm);

export default WrapperRegisterForm;