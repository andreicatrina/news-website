import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DailyNewsContainer,
  LandingContainer,
  LandingSection,
  MainNewsContainer,
  MainNewsImageContainer,
  MainNewsTextContainer,
  ShortNewsContainer,
} from "./components";

import testImg from "../../testImg/github.svg";

export const Landing = () => {
  const [news, setNews] = useState();
  const [newsUrl, setNewsUrl] = useState();
  const [newsDate, setNewsDate] = useState("");

  const apiKey = "e4af1ee2601244fdacb260002408e8a7";

  const url = "https://newsapi.org/v2/top-headlines?country=ro&apiKey=e4af1ee2601244fdacb260002408e8a7";

  const newsApi = async function () {
    try {
      const response = await axios.get(url);
      // console.log(response.data.articles[0].title);
      setNews(response.data.articles[0].title);
      setNewsUrl(response.data.articles[0].url);
      const date = new Date(response.data.articles[0].publishedAt).toLocaleString();
      setNewsDate(date);
      console.log(news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, []);

  return (
    <LandingSection>
      <LandingContainer>
        <DailyNewsContainer>
          <MainNewsContainer href={newsUrl} target="_blank">
            <MainNewsImageContainer>
              <img src={testImg} alt="" />
            </MainNewsImageContainer>
            <MainNewsTextContainer>
              <span>{newsDate}</span>
              <p>{news}</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur reiciendis, harum obcaecati
                sint delectus a beatae consequuntur nostrum placeat!
              </span>
            </MainNewsTextContainer>
          </MainNewsContainer>
        </DailyNewsContainer>
        <ShortNewsContainer>
          <h3>Ultima ora</h3>
        </ShortNewsContainer>
      </LandingContainer>
    </LandingSection>
  );
};
