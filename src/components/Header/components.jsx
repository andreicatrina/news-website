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
    -webkit-animation: tracking-in-expand-fwd 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand-fwd 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;

    span {
      font-size: 14px;
    }

    @-webkit-keyframes tracking-in-expand-fwd {
      0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px);
        transform: translateZ(-700px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
      }
    }
    @keyframes tracking-in-expand-fwd {
      0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px);
        transform: translateZ(-700px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
      }
    }
  }
`;

export const MenuContainer = styled.div`
  padding: 10px;
  position: relative;

  svg {
    cursor: pointer;
  }
`;

export const SvgContainer = styled.div`
  svg {
    width: 24px;
    height: 24px;
    -webkit-animation: roll-in-blurred-right 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: roll-in-blurred-right 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;

    @-webkit-keyframes roll-in-blurred-right {
      0% {
        -webkit-transform: translateX(1000px) rotate(720deg);
        transform: translateX(1000px) rotate(720deg);
        -webkit-filter: blur(50px);
        filter: blur(50px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) rotate(0deg);
        transform: translateX(0) rotate(0deg);
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
    @keyframes roll-in-blurred-right {
      0% {
        -webkit-transform: translateX(1000px) rotate(720deg);
        transform: translateX(1000px) rotate(720deg);
        -webkit-filter: blur(50px);
        filter: blur(50px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) rotate(0deg);
        transform: translateX(0) rotate(0deg);
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
  }
`;

export const MenuParent = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  position: absolute;
  top: 36px;
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

  svg {
    width: 22px;
    height: 22px;
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
  }

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
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
