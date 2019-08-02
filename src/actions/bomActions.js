import axios from "axios";

import { GET_BOM } from "./types";
import BACKEND_URL from "../constants/BACKEND_URL";

export const getBom = (
  category,
  cpu,
  gpu,
  hdd,
  ram,
  name
) => async dispatch => {
  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/get_dataframe?laptop_type=${category}&cpu=${cpu}&gpu=${gpu}&hdd=${hdd}&ram=${ram}`
    );
    console.log("from action", data.message);

    // this.setState({ error: "", buttonLoading: false });
    // this.props.history.push("/result");
    var lowCostBom = data.message.df_cost;
    var lowCostBomAvgCpr = data.message.df_cost_cpr;
    var lowCostBomAvgSpr = data.message.df_cost_spr;
    var lowCostBomTotalCost = data.message.df_cost_sum;
    var highCprBom = data.message.df_cpr;
    var highCprBomAvgCpr = data.message.df_cpr_cpr;
    var highCprBomAvgSpr = data.message.df_cpr_spr;
    var highCprBomTotalCost = data.message.df_cpr_sum;
    var highSprBom = data.message.df_spr;
    var highSprBomAvgCpr = data.message.df_spr_cpr;
    var highSprBomAvgSpr = data.message.df_spr_spr;
    var highSprBomTotalCost = data.message.df_spr_sum;
    var optimizedBom = data.message.df_overall;
    var optimizedBomAvgCpr = data.message.df_overall_cpr;
    var optimizedBomAvgSpr = data.message.df_overall_spr;
    var optimizedBomTotalCost = data.message.df_overall_sum;

    var payload = {
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
    };
  } catch (error) {
    console.error(error);
    // this.setState({
    //   error: "Some server error occured!",
    //   buttonLoading: false,
    // });
  }

  dispatch({
    type: GET_BOM,
    payload: payload,
  });
};
