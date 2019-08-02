import { GET_BOM } from "../actions/types";

const initialState = {
  name: "",
  lowCostBom: [],
  lowCostBomAvgCpr: null,
  lowCostBomAvgSpr: null,
  lowCostBomTotalCost: null,
  highCprBom: [],
  highCprBomAvgCpr: null,
  highCprBomAvgSpr: null,
  highCprBomTotalCost: null,
  highSprBom: [],
  highSprBomAvgCpr: null,
  highSprBomAvgSpr: null,
  highSprBomTotalCost: null,
  optimizedBom: [],
  optimizedBomAvgCpr: null,
  optimizedBomAvgSpr: null,
  optimizedBomTotalCost: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BOM:
      console.log(payload);
      const {
        lowCostBom,
        lowCostBomAvgCpr,
        lowCostBomAvgSpr,
        lowCostBomTotalCost,
        highCprBom,
        highCprBomAvgCpr,
        highCprBomAvgSpr,
        highCprBomTotalCost,
        highSprBom,
        highSprBomAvgCpr,
        highSprBomAvgSpr,
        highSprBomTotalCost,
        optimizedBom,
        optimizedBomAvgCpr,
        optimizedBomAvgSpr,
        optimizedBomTotalCost,
        name,
      } = payload;
      return {
        ...state,
        name,
        lowCostBom,
        lowCostBomAvgCpr,
        lowCostBomAvgSpr,
        lowCostBomTotalCost,
        highCprBom,
        highCprBomAvgCpr,
        highCprBomAvgSpr,
        highCprBomTotalCost,
        highSprBom,
        highSprBomAvgCpr,
        highSprBomAvgSpr,
        highSprBomTotalCost,
        optimizedBom,
        optimizedBomAvgCpr,
        optimizedBomAvgSpr,
        optimizedBomTotalCost,
      };

    default:
      return state;
  }
}
