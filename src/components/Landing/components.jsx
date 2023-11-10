import styled from "styled-components";

export const LandingSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 1600px;
  padding: 14px;
`;

export const DailyNewsContainer = styled.div`
  width: 70%;
`;
export const ShortNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 10px;
  background-color: var(--color-white-gray);
  border-radius: 8px;

  h3 {
    text-transform: uppercase;
    padding: 8px 0;
  }
`;

export const MainNewsContainer = styled.a`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 12px;
  background-color: var(--color-green);
  border-radius: 8px;
  cursor: pointer;
`;
export const MainNewsImageContainer = styled.div`
  width: 70%;
  max-width: 600px;
  height: 380px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export const MainStorySource = styled.span`
  font-size: 18px;
  font-weight: 00;
  margin-top: 12px;
`;

export const StoryContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  cursor: pointer;
`;

export const ShortNews = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
export const ShortNewsDescription = styled.span`
  width: 100%;
  max-width: 260px;
  font-size: 16px;
  font-weight: 500;
`;

export const GeneralNews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 6px;
  background-color: #fff;
  padding: 24px 8px;
`;

export const GeneralNewsContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  width: 100%;
  max-height: 300px;

  img {
    width: 100%;
    max-width: 400px;
    height: 190px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StoryDate = styled.div`
  padding-top: 4px;
`;
