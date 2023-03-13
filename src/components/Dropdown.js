import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/img/mitosis_options_header.png";

const Main = styled("div")`
  /* font-family: sans-serif;*/
  background: rgba(0, 0, 0, 0);
  height: 100vh;
`;

const DropDownContainer = styled("div")`
 width: 300px;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
 
  cursor: pointer;
  background-image: url(${background});
  background-size: 100% 100%;
  width: 417px;
  height: 93px;
  line-height: 93px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

const DropDownListContainer = styled("div")`
  
`;

const DropDownList = styled("ul")`
  width: 417px;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }

  font-size: 24px;
  font-family: Roboto;
  
  background-color: cornflowerblue;
  color: white;
  text-align: left;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;

const options = ["Mangoes", "Apples", "Oranges"];

export const Dropdown = (props) =>
{

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>

      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Mangoes"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}

export default Dropdown;
