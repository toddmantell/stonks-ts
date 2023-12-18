import React, { useContext } from "react";
import MarketBanner from "../components/MarketBanner";
import StonkSkeleton from "../components/StonkSkeleton";
import UserContext from "../data/context/UserContext";
import StonkCards from "../components/StonkCards";
import SortCardsDropdown from "../components/SortCardsDropdown";
import "./dashboard.css";
import MobileHeader from "../components/Header/MobileHeader";

export default function StonksDashboard() {
  const context = useContext(UserContext);

  const {
    removeStonk,
    sortStonks,
    state: { stonks, sortedStonks, isLoading, isMobile },
  } = context;

  return (
    <>
      <MarketBanner />
      <SortCardsDropdown dispatch={sortStonks} />
      <main className="stonks-container" data-testid="stonks-container">
        <StonkCards
          stonks={sortedStonks.length ? sortedStonks : stonks}
          removeStonk={removeStonk}
        />
      </main>
    </>
  );
}
