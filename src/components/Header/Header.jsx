import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ExchangeContainer,
  HeaderContainer,
  HeaderExchangeContainer,
  HeaderSection,
  LogoMenuContainer,
  MenuContainer,
} from "./components";

import { HiMenu } from "react-icons/hi";

export const Header = () => {
  const [rateEur, setRateEur] = useState();
  const [rateUsd, setRateUsd] = useState();

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
    } catch {}
  };

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
            <HiMenu />
          </MenuContainer>
        </LogoMenuContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
