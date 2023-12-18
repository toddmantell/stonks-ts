import { StonkType } from "../types/StonkType";

export default function isUndervalued(stonk: StonkType): boolean {
  return (
    stonk.forwardConservativeGrahamFormulaNumber > stonk.latestPrice &&
    stonk.pastConservativeGrahamFormulaNumber > stonk.latestPrice
  );
}
