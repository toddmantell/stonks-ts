import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StonkType } from "../types/StonkType";
import UserContext from "../data/context/UserContext";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import isUndervalued from "../utilities/isUndervalued";
import UndervaluedWrapper from "../components/UndervaluedWrapper";
import USDollar from "../utilities/numberFormat";

export default function StonkDetails() {
  const { symbol } = useParams();
  const {
    state: { stonks },
  } = useContext(UserContext);

  const detailedStonk: StonkType = stonks.find(
    (stonk) => stonk.symbol === symbol
  );
  // in the future we need to have a method for repopulating the stonk if the user refreshes

  window.scrollTo(100, 0);

  const showAsUnderValued = isUndervalued(detailedStonk)
    ? {
        color: "green",
        fontWeight: "700",
      }
    : {};

  return (
    <Grid>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt={detailedStonk.companyName}
              src={`https://storage.googleapis.com/iex/api/logos/${detailedStonk.symbol}.png`}
            />
          </ListItemAvatar>
          <ListItemText
            id={detailedStonk.companyName}
            primary={detailedStonk.companyName}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={`Latest Price: ${USDollar.format(
              detailedStonk.latestPrice
            )}`}
            style={{ ...showAsUnderValued, justifyItems: "start" }}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={"Change Percent:"}
            secondary={detailedStonk.changePercent}
          />
        </ListItem>
        <Divider />
        <ListItem>
          High Growth Estimate: {detailedStonk.previousGrowthRate}
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={"Value at High Growth:"} />
          <ListItemText
            style={showAsUnderValued}
            primary={USDollar.format(detailedStonk.pastGrahamFormulaNumber)}
          />
        </ListItem>
        <Divider />
        pastGrahamFormulaNumber: 69.16
        <Divider />
        Value at Conservative High Growth:{" "}
        <UndervaluedWrapper
          undervaluedStyle={showAsUnderValued}
          textToWrap={USDollar.format(
            detailedStonk.pastConservativeGrahamFormulaNumber
          )}
        />
        <Divider />
        Low Growth Rate: {detailedStonk.futureGrowthRate}
        <Divider />
        Value at Conservative Low Growth:{" "}
        <UndervaluedWrapper
          undervaluedStyle={showAsUnderValued}
          textToWrap={USDollar.format(
            detailedStonk.forwardConservativeGrahamFormulaNumber
          )}
        />
        <Divider />
        peRatio: 8.17
        <Divider />
        ttmEPS: 3.56
      </List>
    </Grid>
  );
}
