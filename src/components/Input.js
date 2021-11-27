import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = ({ getMovies }) => {
  const titleRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { value: title } = titleRef.current;
      getMovies({ title });
    },
    [getMovies]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputStyled ref={titleRef} placeholder="Search" />
        <InputButton type="submit">
          <span class="material-icons">search</span>
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

const Form = styled.form``;

const InputStyled = styled.input`
  display: block;
  font-size: 20px;
  padding: 20px 40px;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  border: none;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
`;

const InputButton = styled.button``;

export default Input;
