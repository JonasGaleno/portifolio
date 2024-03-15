import styled from "styled-components";

export const Container = styled.div`
    top: 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
    background-color: #000;
    color: #fff;
    position: fixed;
    width: 100%;
    z-index: 99;
`;

export const MenuHamburguer = styled.div`
    display: none;

    @media screen and (max-width: 767px) { // 430
      display: flex;
      font-size: 24px;
      margin-right: 30px;
      cursor: pointer;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      display: none;
    }
`;

export const NavLinks = styled.nav.attrs<{$sidebaropen: boolean;}>(props => ({
  $sidebaropen: props.$sidebaropen,
}))`
    display: flex;
    margin-right: 10%;
    gap: 30px;

    @media screen and (max-width: 767px) { // 430
      padding-top: 100px;
      flex-direction: column;
      background-color: #161616;
      position: fixed;
      width: 100%;

      gap: 0px;
      top: 0px;
      right: 0px;
      
      right: ${props => props.$sidebaropen ? '-10%' : '-110%'};
      transition: 0.5%;

      a {
          padding: 30px 0px;
          border-color: #737373;
          border-top: 1px solid;
          display: flex;
          align-items: center;
          justify-content: space-around;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      margin-right: 7%;
    }
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;

  @media screen and (max-width: 767px) { // 430
    height: 40px;
    width: 40px;
  }
`;

export const MyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
  align-items: center;
  margin-left: 10%;

  &:hover {
      color: #eb70e9;
  }

  @media screen and (max-width: 767px) { // 430
    margin-left: 30px;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 7%;
  }
`;

export const Logo = styled.a`
  display: flex;
  padding: 3px;
  border-radius: 50%;
  background-color: #eb70e9;
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media screen and (max-width: 767px) { // 430
    display: flex;
  }
`;

export const Item = styled.div`
  font-size: 20px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #eb70e9;
  }

  @media screen and (max-width: 767px) { // 430
    font-size: 15pt;
  }
`;
