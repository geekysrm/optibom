import { GET_BOM, UPDATE_ITEM } from "../actions/types";

const initialState = [
  {
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
  },
];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BOM:
      localStorage.setItem("currentIndex", "0");
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
      return [
        {
          // ...state[state.length - 1],
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
        },
      ];

    case UPDATE_ITEM:
      // let curentIndex = Number(storage.getItem("currentIndex"));
      const Item = payload.Item;
      const bomType = payload.category;
      return {
        ...state,
        bomType: [
          ...state[bomType],
          (state[bomType][Item] = payload.incomingChanges),
        ],
      };

    default:
      return state;
  }
}
