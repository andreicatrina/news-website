import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DailyNewsContainer,
  GeneralNews,
  GeneralNewsContainer,
  LandingContainer,
  LandingSection,
  MainNewsContainer,
  MainNewsImageContainer,
  MainNewsTextContainer,
  MainStorySource,
  ShortNews,
  ShortNewsContainer,
  ShortNewsDescription,
  StoryContainer,
  StoryDate,
  TextContainer,
} from "./components";

import testImg from "../../testImg/github.svg";

export const Landing = () => {
  const [news, setNews] = useState(null);
  const [breakingNews, setBreakingNews] = useState(null);

  const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e4af1ee2601244fdacb260002408e8a7";
  const apiUrl2 = "https://newsdata.io/api/1/news?apikey=pub_31340dbb6c828a2779decd5d90c810e17165e&country=us";

  const newsApi = async function () {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.articles);
      setNews(response.data.articles);
      // let filteredNews = news.filter((story)=>{

      // })
    } catch (error) {
      console.log(error);
    }
  };

  const breakingNewsApi = async function () {
    try {
      const response = await axios.get(apiUrl2);
      console.log(response);
      // setBreakingNews(response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    breakingNewsApi();
    // StoriesFiltered();
  }, []);

  if (!news) return null;

  // function StoriesFiltered() {
  //   let filteredStories = news.filter((story) => {
  //     return story.description !== "[Removed]" && story.description !== null;
  //   });
  //   console.log(filteredStories);
  //   return filteredStories;
  // }

  return (
    <LandingSection>
      <LandingContainer>
        <DailyNewsContainer>
          <MainNewsContainer href={news[0].url} target="_blank">
            <MainNewsImageContainer>
              <img src={news[1].urlToImage} alt="" />
            </MainNewsImageContainer>
            <MainNewsTextContainer>
              <span>{`${new Date(news[1].publishedAt).toLocaleString()}`}</span>
              <p>{news[1].title}</p>
              <span>{news[1].description}</span>
              <MainStorySource>{`-${news[1].source.name}-`}</MainStorySource>
            </MainNewsTextContainer>
          </MainNewsContainer>
          <GeneralNews>
            {news
              .filter((story) => {
                return story.urlToImage !== null;
              })
              .map((story) => {
                return (
                  <GeneralNewsContainer href={story.url} target="_blank">
                    <img src={story.urlToImage} alt="" />
                    <TextContainer>
                      <StoryDate>{new Date(story.publishedAt).toLocaleString()}</StoryDate>
                      <p>{`${story?.description.slice(0, 90)} ...[More]`}</p>
                    </TextContainer>
                  </GeneralNewsContainer>
                );
              })}
          </GeneralNews>
        </DailyNewsContainer>
        <ShortNewsContainer>
          <h3>Ultima ora</h3>
          {news
            .filter((story) => {
              // console.log(story.description !== "[Removed]");
              return story.description !== "[Removed]" && story.description !== null;
            })
            .map((story) => {
              return (
                <StoryContainer href={story.url} target="_blank">
                  <ShortNews>{new Date(story.publishedAt).toLocaleString()}</ShortNews>
                  <ShortNewsDescription>{`${story.description}`}</ShortNewsDescription>
                </StoryContainer>
              );
            })}
        </ShortNewsContainer>
      </LandingContainer>
    </LandingSection>
  );
};
