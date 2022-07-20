import styled from "styled-components";

export const StatisticsSection = styled.section`
padding: 20px;
`;

export const Title = styled.h2`
margin-bottom: 10px;
font-size: 30px;
`;

export const Text = styled.p`
margin-bottom: 5px;
font-size: 20px;
`;

export const Value = styled.span`
margin-left: 10px;
margin-bottom: 5px;
padding: 2px;
background-color: aliceblue;
font-size: 20px;
font-weight: bold;
color: ${p => (p.good ? 'green' : p.bad ? 'red' : p.neutral ? '#6e6464' : 'bleck') };

`;

export const ValuePercentage = styled.span`
margin-left: 10px;
margin-bottom: 5px;
padding: 2px;
background-color: aliceblue;
font-size: 20px;
font-weight: bold;
color: ${p => (p.positivePercentage > 75 ? 'green' : p.positivePercentage > 40 ? '#d5880c' : 'red') };
`;
