import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import CommonButton from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(CommonButton)`
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onSubmit, onChange }) => {
  return (
    <AuthFormBlock>
      <h3>{type}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete='username'
          name='username'
          placeholder='ID'
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete='new-password'
          name='password'
          placeholder='Password'
          type='password'
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete='new-password'
            name='passwordConfirm'
            placeholder='confirm Password'
            type='password'
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth>
          {type}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to='/register'>Sign Up</Link>
        ) : (
          <Link to='/login'>Sign In</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
