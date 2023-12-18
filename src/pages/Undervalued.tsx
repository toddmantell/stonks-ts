import React, { useContext } from "react";
import MarketBanner from "../components/MarketBanner";
import StonkSkeleton from "../components/StonkSkeleton";
import UserContext from "../data/context/UserContext";
import SortCardsDropdown from "../components/SortCardsDropdown";
import "./dashboard.css";
import MobileHeader from "../components/Header/MobileHeader";
import StonksList from "../components/StonksList";
import isUndervalued from "../utilities/isUndervalued";
import { StonkType } from "../types/StonkType";
import { Typography } from "@mui/material";

export default function Undervalued() {
  const context = useContext(UserContext);

  const {
    state: { stonks, isLoading, isMobile },
  } = context;

  const undervaluedStonks = stonks.filter((stonk: StonkType) =>
    isUndervalued(stonk)
  );

  return isMobile ? (
    <main className="stonks-container" data-testid="stonks-container">
      <MobileHeader pageName="Undervalued Companies" />
      {isLoading === true ? (
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <StonkSkeleton key={`skeleton-${item}`} />
        ))
      ) : (
        <StonksList stonks={undervaluedStonks} />
      )}
    </main>
  ) : (
    <>
      <MarketBanner />
      <Typography>Undervalued Companies</Typography>
      <main className="stonks-container" data-testid="stonks-container">
        {isLoading === true ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <StonkSkeleton key={`skeleton-${item}`} />
          ))
        ) : (
          <StonksList stonks={undervaluedStonks} />
        )}
      </main>
    </>
  );
}
