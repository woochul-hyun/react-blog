import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = ({ form, changeField, initializeForm }) => {
  const onChange = e => {
    const { value, name } = e.target;
    console.log(value);
    changeField({
      form: 'login',
      key: name,
      value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    initializeForm('login');
  }, [initializeForm]);

  return (
    <AuthForm
      type='login'
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default connect(
  ({ auth }) => ({
    form: auth.login
  }),
  {
    changeField,
    initializeForm
  }
)(LoginForm);
