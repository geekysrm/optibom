import React, { Component } from "react";
import "../../assets/styles/Result.css";

import LaptopDetails from "../LaptopDetails.js/LaptopDetails";

export default class Result extends Component {
  state = {
    name: "Dell Pavillion",
    laptop_id: 1234,
    category: "gaming",
    options: [
      "lowest cost",
      "highest component rating",
      "highest supplier rating",
      "optimal configuration"
    ],
    lowbom: {
      cpu: {
        supplier: "intel",
        processor: "i5"
      },
      ram: {
        supplier: "kingston",
        size: "8gb"
      },
      keyboard: {
        supplier: "dell"
      },
      mouse: {
        supplier: "apple"
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080"
      },
      hdd: {
        supplier: "sony",
        size: "1TB"
      }
    },
    highspr: {
      cpu: {
        supplier: "intel",
        processor: "i5"
      },
      ram: {
        supplier: "kingston",
        size: "8gb"
      },
      keyboard: {
        supplier: "dell"
      },
      mouse: {
        supplier: "apple"
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080"
      },
      hdd: {
        supplier: "sony",
        size: "1TB"
      }
    },
    highcpr: {
      cpu: {
        supplier: "intel",
        processor: "i5"
      },
      ram: {
        supplier: "kingston",
        size: "8gb"
      },
      keyboard: {
        supplier: "dell"
      },
      mouse: {
        supplier: "apple"
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080"
      },
      hdd: {
        supplier: "sony",
        size: "1TB"
      }
    },
    optimal: {
      cpu: {
        supplier: "intel",
        processor: "i5"
      },
      ram: {
        supplier: "kingston",
        size: "8gb"
      },
      keyboard: {
        supplier: "dell"
      },
      mouse: {
        supplier: "apple"
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080"
      },
      hdd: {
        supplier: "sony",
        size: "1TB"
      }
    }
  };
  render() {
    return (
      <div className='result-container data-container'>
        <LaptopDetails />

        <div className='bom-version-list'>Bom Version</div>
        <div className='current-bom'>
          <div className='components-list'>Component List</div>
          <div className='component-details'>Component Details</div>
        </div>
      </div>
    );
  }
}