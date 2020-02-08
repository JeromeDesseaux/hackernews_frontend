import React, {useState} from "react";
import { Form, Icon, Input, Button, Alert } from 'antd';
import { Link, withRouter  } from 'react-router-dom';
import { SpacedWrapper, FormErrorContainer } from '../Styles';
import { useAuth } from '../../contexts/AuthContext';


const LoginForm = (props) => {

  const [ loading, setLoading ] = useState(false); 
  const [ error, setError ] = useState(false); 

  const authContext = useAuth();
  const { getFieldDecorator } = props.form;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await props.form.validateFields(async (err, values) => {
      if (!err) {
        const isSuccess = await authContext.login(values.username, values.password);
        if(isSuccess) {
          setError(false);
          props.history.push('/');
        }else{
          setError(true);
          props.form.resetFields();
        }
      }
    });
    setLoading(false);
  };

  return (
      <div>
        {  error ? 
        <FormErrorContainer><Alert message="Invalid credentials" type="error" /></FormErrorContainer>  : ''
        }
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
              Log in
            </Button>
          </Form.Item>
          <SpacedWrapper>
              <Link to="/register">Register</Link>
          </SpacedWrapper>
        </Form>
      </div>
  );
}

const WrapperLoginForm = Form.create({ name: 'login' })(LoginForm);

export default withRouter(WrapperLoginForm);