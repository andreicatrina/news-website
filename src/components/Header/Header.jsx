import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CategoryContainer,
  ExchangeContainer,
  HeaderContainer,
  HeaderExchangeContainer,
  HeaderSection,
  LogoMenuContainer,
  MenuContainer,
  MenuParent,
  MenuSelections,
  SubCategoryContainer,
  SvgContainer,
} from "./components";

import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export const Header = () => {
  const [rateEur, setRateEur] = useState();
  const [rateUsd, setRateUsd] = useState();
  const [menu, setMenu] = useState(false);
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);
  const [subMenu3, setSubMenu3] = useState(false);
  const [subMenu4, setSubMenu4] = useState(false);

  useEffect(() => {
    exchangeApi();
  }, []);

  const apiKey = "fca_live_koVauv8aJNz7KW74hx4zj1CTAOVrP2CCYmaBMXNH";
  const url1 =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_koVauv8aJNz7KW74hx4zj1CTAOVrP2CCYmaBMXNH&currencies=RON&base_currency=EUR";
  const url2 =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_koVauv8aJNz7KW74hx4zj1CTAOVrP2CCYmaBMXNH&currencies=RON";

  const exchangeApi = async function () {
    try {
      const response1 = await axios.get(url1);
      console.log(response1.data.data.RON);
      setRateEur(response1.data.data.RON.toFixed(3));
      const response2 = await axios.get(url2);
      //   console.log(response2);
      setRateUsd(response2.data.data.RON.toFixed(3));
    } catch (error) {
      console.log(error);
    }
  };

  function onClickMenu() {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  function onClickSubMenu1() {
    if (subMenu1 === true) {
      setSubMenu1(false);
    } else {
      setSubMenu1(true);
    }
  }
  function onClickSubMenu2() {
    if (subMenu2 === true) {
      setSubMenu2(false);
    } else {
      setSubMenu2(true);
    }
  }
  function onClickSubMenu3() {
    if (subMenu3 === true) {
      setSubMenu3(false);
    } else {
      setSubMenu3(true);
    }
  }
  function onClickSubMenu4() {
    if (subMenu4 === true) {
      setSubMenu4(false);
    } else {
      setSubMenu4(true);
    }
  }

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderExchangeContainer>
          <ExchangeContainer>
            <p>{`EUR: ${rateEur} Ron`}</p>
            <p>{`USD: ${rateUsd} Ron`}</p>
          </ExchangeContainer>
        </HeaderExchangeContainer>
        <LogoMenuContainer>
          <h1>ColdNews</h1>
          <MenuContainer>
            <SvgContainer onClick={onClickMenu}>{menu ? <AiOutlineClose /> : <HiMenu />}</SvgContainer>
            <MenuParent display={menu ? "flex" : "none"}>
              <MenuSelections>
                <CategoryContainer onClick={onClickSubMenu1}>
                  Sport
                  {subMenu1 ? <AiOutlineClose /> : <AiOutlinePlus />}
                </CategoryContainer>
                <SubCategoryContainer display={subMenu1 ? "flex" : "none"}>
                  <p>Fotbal</p>
                  <p>Tenis</p>
                  <p>Baschet</p>
                </SubCategoryContainer>
              </MenuSelections>
              <MenuSelections>
                <CategoryContainer onClick={onClickSubMenu2}>
                  Science
                  {subMenu2 ? <AiOutlineClose /> : <AiOutlinePlus />}
                </CategoryContainer>
                <SubCategoryContainer display={subMenu2 ? "flex" : "none"}>
                  <p>Fotbal</p>
                  <p>Tenis</p>
                  <p>Baschet</p>
                </SubCategoryContainer>
              </MenuSelections>
              <MenuSelections>
                <CategoryContainer onClick={onClickSubMenu3}>
                  Life
                  {subMenu3 ? <AiOutlineClose /> : <AiOutlinePlus />}
                </CategoryContainer>
                <SubCategoryContainer display={subMenu3 ? "flex" : "none"}>
                  <p>Fotbal</p>
                  <p>Tenis</p>
                  <p>Baschet</p>
                </SubCategoryContainer>
              </MenuSelections>
              <MenuSelections>
                <CategoryContainer onClick={onClickSubMenu4}>
                  Projects
                  {subMenu4 ? <AiOutlineClose /> : <AiOutlinePlus />}
                </CategoryContainer>
                <SubCategoryContainer display={subMenu4 ? "flex" : "none"}>
                  <p>Fotbal</p>
                  <p>Tenis</p>
                  <p>Baschet</p>
                </SubCategoryContainer>
              </MenuSelections>
            </MenuParent>
          </MenuContainer>
        </LogoMenuContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
