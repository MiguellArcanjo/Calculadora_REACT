import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fbffcd;
`;

export const Calc = styled.div`
    width: 450px;
    height: 550px;
    border-radius: 10px;
    background-color: #1c5560;
    /* border: #1c5560 2px solid; */
`;

export const Input = styled.input`
    outline: none;
    border: none;
    width: 450px;
    height: 120px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    font-size: 5rem;
    text-align: right;
    padding-right: 10px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 90px);
    grid-template-columns: repeat(4, 93px);
    margin-left: 60px;
    /* margin-bottom: 100px; */
`;