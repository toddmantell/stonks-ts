import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import { StonkType } from "../types/StonkType";
import isUndervalued from "../utilities/isUndervalued";
import { Link } from "react-router-dom";

type Props = {
  stonks: Array<StonkType>;
};

export default function (props: Props) {
  return (
    <List
      dense
      sx={{ width: "500%", maxWidth: 800, bgcolor: "background.paper" }}
    >
      {props.stonks.map((stonk, index) => {
        const showAsUndervalued = isUndervalued(stonk)
          ? {
              color: "green",
              fontWeight: "700",
            }
          : {};
        return (
          <>
            <Link key={index} to={"/detail/" + stonk.symbol}>
              <ListItem key={index} disablePadding>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${index + 1}`}
                    src={`https://storage.googleapis.com/iex/api/logos/${stonk.symbol}.png`}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={stonk.companyName}
                  primary={stonk.companyName}
                  secondary={stonk.symbol}
                  style={{
                    ...showAsUndervalued,
                    maxWidth: "400px",
                    minWidth: "400px",
                  }}
                />
                <ListItemText
                  primary={"$" + stonk.latestPrice}
                  style={{ ...showAsUndervalued, justifyItems: "start" }}
                />
              </ListItem>
            </Link>
            {index < props.stonks.length - 1 && <Divider />}
          </>
        );
      })}
    </List>
  );
}
