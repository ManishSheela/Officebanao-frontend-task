import React, { useState } from "react";
import "./overview.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import Activity from "./Activity";
const Civil = ({ item }) => {
  const [civilToggle, setCivilToggle] = useState(false);

  return (
    <tbody>
      <tr className={!civilToggle ? "civil_tr" : ""}>
        <td>
          <input type="checkbox" />
        </td>
        <td colSpan="3" style={{fontWeight:'bold',width:"50px"}}>{item.package_name}</td>
        <td>{item.rate}</td>
        <td>{item.total}</td>
        <td>
          {!civilToggle ? (
            <FaPlus
              className="collapseBtn"
              onClick={() => setCivilToggle(!civilToggle)}
            />
          ) : (
            <FaMinus
              className="collapseBtn"
              onClick={() => setCivilToggle(!civilToggle)}
            />
          )}
        </td>
      </tr>
      {civilToggle &&
        item.subRows.map((subItem) => (
          <Activity key={subItem.id} actvityItem={subItem} />
        ))}
    </tbody>
  );
};

export default Civil;
