import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const FieldBox = styled.div<{ position?: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${(props) => props.position ?? "none"};
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 90%;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-weight: bold;
  padding: 0px 5px;
  `;

export const CategorySelect = styled.select`
  width: 90%;
  height: 32px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-weight: bold;
  padding: 0px 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;
