import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100%;
  background-color: var(--color-white-gray);
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 4px;
`;

export const HeaderExchangeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExchangeContainer = styled.div`
  display: flex;
  gap: 18px;
  padding: 4px 10px;

  p {
    font-size: 10px;
  }
`;

export const LogoMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    padding: 10px;
  }
`;

export const MenuContainer = styled.div`
  padding: 10px;
`;
