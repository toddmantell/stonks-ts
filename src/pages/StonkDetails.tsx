import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StonkType } from "../types/StonkType";
import UserContext from "../data/context/UserContext";

export default function StonkDetails() {
  const { symbol } = useParams();
  const {
    state: { stonks },
  } = useContext(UserContext);

  const currentStonk = stonks.find((stonk) => stonk.symbol === symbol);

  window.scrollTo(100, 0);

  return (
    <div style={{ flexDirection: "column" }}>
      {currentStonk &&
        Object.keys(currentStonk).map((objectKey, index) => (
          <div key={index} style={{ textAlign: "start" }}>
            {objectKey}: {currentStonk[objectKey]}
          </div>
        ))}
    </div>
  );
}
