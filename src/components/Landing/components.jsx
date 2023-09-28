import styled from "styled-components";

export const LandingSection = styled.section`
  width: 100%;
  background-color: var(--color-white-gray);
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  padding: 14px;
`;

export const DailyNewsContainer = styled.div`
  width: 70%;
`;
export const ShortNewsContainer = styled.div`
  width: 30%;

  h3 {
    text-transform: uppercase;
  }
`;

export const MainNewsContainer = styled.a`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 12px;
  background-color: var(--color-green);
  border-radius: 8px;
`;
export const MainNewsImageContainer = styled.div`
  width: 70%;
  max-width: 600px;
  height: 380px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const MainNewsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 30%;
  padding: 8px;

  p {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
  }
`;
