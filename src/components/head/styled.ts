import styled from 'styled-components';

export const HeadStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/images/head-bg.png');
  background-size: cover;
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 100px 0 72px;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: white;
  cursor: pointer;
`;

export const NavItem = styled.div`
  margin-left: 45px;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const HeadDescription = styled.div`
  padding-top: 40vh;
  font-size: 40px;
  line-height: 66px;
  width: 65%;
  margin: 0 auto;
  position: relative;
  color: white;
  position: relative;
  z-index: 2;
  font-weight: 300;
  .head-description__border {
    border-bottom: 8px solid #5C62E3;
    padding-bottom: 5px;
  }
  .head-description__small {
    font-size: 20px;
  }
`;
