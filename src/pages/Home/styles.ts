import styled from "styled-components";

import banner from "../../assets/img/banner.jpg";

export const Container = styled.div`
background-color: #EEE;
height: 100vh;
`;

export const Header = styled.div`
  background-color: darkblue;  
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 150px;
  text-align: center;
`;
export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #333;
  padding-top: 30px;
`;
export const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`;
