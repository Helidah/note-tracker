import { useState } from "react";
import styled from "styled-components";
import "../App.css";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-1/2 the-bg">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h1 className="text-4xl font-bold text-white">Note Tracker</h1>

                <p className="max-w-xl mt-3 text-gray-300">Note-Tracker is a powerful application that allows you to create and edit note definitions,</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="mt-8">
                <Wrapper>
                  <Logo>Note Tracker</Logo>
                  {showLogin ? (
                    <>
                      <LoginForm onLogin={onLogin} />
                      <Divider />
                      <p>
                        Don't have an account? &nbsp;
                        <Button color="secondary" className="md-hover:bg-blue-900 md-hover:text-white" onClick={() => setShowLogin(false)}>
                          Sign Up
                        </Button>
                      </p>
                    </>
                  ) : (
                    <>
                      <SignUpForm onLogin={onLogin} />
                      <Divider />
                      <p>
                        Already have an account? &nbsp;
                        <Button className="md-hover:bg-blue-900 md-hover:text-white" color="secondary" onClick={() => setShowLogin(true)}>
                          Log In
                        </Button>
                      </p>
                    </>
                  )}
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: indigo;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;
