import styled from "styled-components";

export const FeedbackButton = styled.button`
width: 150px;
height: 40px;
background-color: #7e675f;
transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
color: #6b250d;
font-size: 20px;
font-weight: 700;
border-radius: 10px;
border: none;
cursor: pointer;
:hover{
   transform: scale(1.03);
   box-shadow: -2px 3px 4px #272525;
   background-color: #634f48;
color: #baa199;
}
`;