export type StonkType = {
  companyName: string;
  forwardConservativeGrahamFormulaNumber: number;
  forwardGrahamFormulaNumber: number;
  futureGrowthRate?: number;
  pastConservativeGrahamFormulaNumber: number;
  pastGrahamFormulaNumber: number;
  previousGrowthRate?: number;
  grahamnumber: number;
  latestPrice: number;
  changePercent: number;
  symbol: string;
  peRatio: number;
  ttmEPS?: number;
};
