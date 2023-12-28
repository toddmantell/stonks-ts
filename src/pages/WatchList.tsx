import React, { useContext } from "react";
import MarketBanner from "../components/MarketBanner";
import StonkSkeleton from "../components/StonkSkeleton";
import UserContext from "../data/context/UserContext";
import StonkCards from "../components/StonkCards";
import SortCardsDropdown from "../components/SortCardsDropdown";
import "./dashboard.css";
import MobileHeader from "../components/Header/MobileHeader";
import StonksList from "../components/StonksList";
import { Typography } from "@mui/material";

export default function WatchList() {
  const context = useContext(UserContext);

  const {
    removeStonk,
    sortStonks,
    state: { stonks, sortedStonks, isLoading, isMobile },
  } = context;

  return isMobile ? (
    <main className="stonks-container" data-testid="stonks-container">
      <MobileHeader pageName="Watch List" />
      <MarketBanner />
      <SortCardsDropdown dispatch={sortStonks} />
      {isLoading === true ? (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <StonkSkeleton key={`skeleton-${item}`} />
        ))
      ) : (
        <StonksList stonks={stonks} />
      )}
    </main>
  ) : (
    <>
      <MarketBanner />

      <main className="stonks-container" data-testid="stonks-container">
        {isLoading === true ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <StonkSkeleton key={`skeleton-${item}`} />
          ))
        ) : (
          <StonksList stonks={stonks} />
        )}
      </main>
    </>
  );
}
