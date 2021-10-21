import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0px;
  text-align: left;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  background-color: #ff0033;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  
`;
