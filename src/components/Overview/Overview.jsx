import React from "react";
import Civil from "./Civil";

import data from "../../data.json";
import "./overview.css";
const Overview = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th colSpan="3">Packages</th>
            <th>Rate</th>
            <th colSpan="2">Total</th>
          </tr>
        </thead>
        {data.map((item) => {
          return <Civil key={item.id} item={item} />;
        })}
      </table>
    </div>
  );
};

export default Overview;
