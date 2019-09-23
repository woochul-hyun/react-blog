import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = ({ form, changeField, initializeForm }) => {
  const onChange = e => {
    const { value, name } = e.target;
    changeField({
      form: 'register',
      key: name,
      value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    initializeForm('register');
  }, [initializeForm]);

  return (
    <AuthForm
      type='register'
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default connect(
  ({ auth }) => ({
    form: auth.register
  }),
  {
    changeField,
    initializeForm
  }
)(RegisterForm);
