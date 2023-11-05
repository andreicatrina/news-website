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
  position: relative;

  svg {
    cursor: pointer;
  }
`;

export const SvgContainer = styled.div``;

export const MenuParent = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  position: absolute;
  top: 30px;
  right: 10px;
  /* width: 100%; */
  width: 200px;
  padding: 12px;
  border-radius: 6px;
  background-color: #fff;
  /* cursor: pointer; */
  animation: 2s menuDelayOpen;

  @keyframes menuDelayOpen {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const MenuSelections = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 12px 0;
  font-weight: 600;
  /* cursor: pointer; */
  transition: 0.6s;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const SubCategoryContainer = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  padding-top: 8px;

  p {
    font-size: 18px;
    font-weight: 500;
    padding: 2px 2px;
    cursor: pointer;
  }
`;
