import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = ({ getMovies }) => {
	const [title, setTitle] = useState("")

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      getMovies({ title});
			setTitle("")
    },
    [getMovies, title]
  );

	const handleChnage = useCallback((e) => {
		const {value} = e.target
		setTitle(value)
	}, [])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputStyled value={title} onChange={handleChnage} placeholder="Search" />
        <InputButton type="submit">
          <span className="material-icons">search</span>
        </InputButton>
      </Form>
    </Container>
  );
};

Input.propTypes = {
  getMovies: PropTypes.func,
};

const Container = styled.div`
  padding: 0 30px;
  padding-top: 20px;
`;

const Form = styled.form`
	position: relative;
`;

const InputStyled = styled.input`
  display: block;
  font-size: 20px;
  padding: 20px 50px;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  border: none;
  border-radius: 40px;
  &:focus {
    outline: none;
  }
`;

const InputButton = styled.button`
	position: absolute;
	border: none;
	top: 18px;
	background-color: #fff;
	left: 10px;
	color: #757575;
	cursor: pointer;
`;

export default Input;
