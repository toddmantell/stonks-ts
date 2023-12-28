/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import ValuationProbabilities from "../components/ValuationProbabilities";
import UserContext from "../data/context/UserContext";
import { Typography } from "@mui/material";

import "./irr.css";
import "../components/typeahead.css";
import IRRWidget from "../components/CalculateIRR";
import MobileHeader from "../components/Header/MobileHeader";
import { StonkType } from "../types/StonkType";

export default function IRR() {
  const { stonks, isMobile } = useContext(UserContext).state;

  const [chosenStonk, setChosenStonk] = useState<StonkType>({});
  const [priceChartData, setPriceChartData] = useState([]);
  const [percentageChartData, setPercentageChartData] = useState([]);

  window.scrollTo(100, 0);

  const setTickerAndPassStonk = (stonk: StonkType) => {
    stonk && setChosenStonk(stonk);
  };

  return (
    <>
      <main className="irr-container">
        <Typography>IRR CALCULATOR</Typography>
        <section className="irrform">
          <div>Calculate Stonk IRR</div>
          <LocalTypeahead
            stonks={stonks}
            setTickerAndPassStonk={setTickerAndPassStonk}
          />
          <div>
            <div>Name: {chosenStonk.companyName}</div>
            <div>Ticker: {chosenStonk.symbol}</div>
            <div>EPS: {chosenStonk.ttmEPS}</div>
            <div>latestPrice: {chosenStonk.latestPrice}</div>
          </div>
          <IRRWidget
            stonk={chosenStonk}
            setPriceChartData={setPriceChartData}
            setPercentageChartData={setPercentageChartData}
          />
        </section>
        <ValuationProbabilities data={priceChartData} chartClass="charta" />
        <ValuationProbabilities
          data={percentageChartData}
          chartClass="chartb"
        />
      </main>
    </>
  );
}

// Re-using the Typeahead for a non-api use case; should look at refactoring the typeahead for both use cases
function LocalTypeahead({
  setTickerAndPassStonk = () => console.log("no handler provided to typeahead"),
  stonks,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    const { value = "" } = e.target;
    setText(value.toUpperCase());
  };

  useEffect(() => {
    let localSuggestions = stonks.slice();
    if (stonks && stonks.length > 0) {
      const regex = new RegExp(`^${text}`, `i`);
      localSuggestions.filter((stonks) => regex.test(stonks.value));
    }

    setSuggestions(localSuggestions);
  }, [text]);

  const renderSuggestions = () => {
    console.log("suggestions :", suggestions);
    if (!suggestions || suggestions.length === 0) {
      return null;
    }

    const filteredSuggestions =
      stonks.filter((stonk) => stonk.symbol.includes(text)) || [];

    const suggestionSelected = (stonk) => {
      setTickerAndPassStonk(stonk);
      setText(stonk.symbol + " - " + stonk.companyName);
      setSuggestions([]);
    };

    return (
      <ul>
        {text &&
          filteredSuggestions.map((stonk, index) => (
            <li key={index} onClick={(e) => suggestionSelected(stonk)}>
              {stonk.symbol} {stonk.companyName}
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div style={{ maxWidth: "20rem" }}>
      <div className="TypeAheadDropDown">
        <input
          onChange={onTextChange}
          onClick={(e) => setText("")}
          placeholder="Search Stonk"
          value={text}
          type="text"
        />
        {renderSuggestions()}
      </div>
    </div>
  );
}
