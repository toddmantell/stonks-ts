import React from "react";
import Typeahead from "./TypeAhead";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";

type Props = {
  getStonkCalculation: Function;
  setTickerAndGetQuote: Function;
  setInputValue: Function;
  previousGrowthRate: number | string;
  futureGrowthRate: number | string;
};

const AddStonkForm = ({
  getStonkCalculation,
  setTickerAndGetQuote,
  setInputValue,
  previousGrowthRate,
  futureGrowthRate,
}: Props) => (
  <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
    data-testid="add-stonk-form"
    className="add-stonk-form"
  >
    <h2 data-testid="form-heading" className="add-stonk-heading">
      Add A New Stonk:
    </h2>
    <div>
      <Typeahead
        setTickerAndGetQuote={setTickerAndGetQuote}
        placeholder="Search By Ticker"
      />
    </div>
    <div>
      <TextField
        id="previous-growth-rate"
        placeholder="High growth rate"
        aria-placeholder="High growth rate"
        data-testid="low-growth-rate"
        onChange={setInputValue}
        value={previousGrowthRate || ""}
        label="High Growth Rate"
        variant="outlined"
        size="small"
      />
    </div>
    <div>
      <TextField
        id="future-growth-rate"
        placeholder="Low growth rate"
        data-testid="low-growth-rate"
        className="textbox"
        onChange={setInputValue}
        value={futureGrowthRate || ""}
        aria-placeholder="Low Growth Rate"
        label="Low Growth Rate"
        size="small"
        variant="outlined"
      />
    </div>
    <Button variant="outlined" onClick={getStonkCalculation}>
      Get Calculation
    </Button>
  </Box>
);

export default AddStonkForm;
