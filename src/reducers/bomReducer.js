import { GET_BOM, UPDATE_ITEM } from "../actions/types";

const initialState = {
  name: "",
  id: "",
  category: "",
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
        id,
        category,
      } = payload;
      return {
        ...state,
        name,
        id,
        category,
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

    case UPDATE_ITEM:
      console.log(payload);
      return {
        ...state,
      };

    default:
      return state;
  }
}
