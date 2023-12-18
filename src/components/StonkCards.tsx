import React from "react";
import Stonk from "./Stonk";
import MuiCard from "./Stonk/";
import NCAVStonk from "./NCAVStonk";

export default ({ stonks, removeStonk }) => (
  <>
    {stonks.map((stonk, index) => {
      return stonk.priceAsPercentOfNCAV > 0 &&
        stonk.priceAsPercentOfNCAV < 100 ? (
        <NCAVStonk key={`stonk-${index}`} {...{ ...stonk, removeStonk }} />
      ) : (
        <MuiCard key={`stonk-${index}`} {...{ ...stonk, removeStonk }} />
      );
    })}
  </>
);
