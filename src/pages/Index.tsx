import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * LoginPage serves as the main entry point for the login screen.
 * It composes the `MainAppLayout` for overall page structure and the `LoginForm`
 * for the user interaction part.
 * 
 * This component itself is stateless and acts as a container to assemble
 * the required layout and feature components.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default LoginPage;
