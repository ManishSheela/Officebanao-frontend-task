import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Work from "./Work";
const Activity = ({ actvityItem }) => {
  const [activityToggle, setActivityToggle] = useState(false);
  return (
    <>
      <tr>
        <td></td>
        <td>
          <input type="checkbox" />
        </td>
        <td colSpan="2">{actvityItem.package_name}</td>
        <td>{actvityItem.rate}</td>
        <td>{actvityItem.total}</td>
        <td>
          {!activityToggle ? (
            <IoIosArrowDown
              className="caret"
              onClick={() => setActivityToggle(!activityToggle)}
            />
          ) : (
            <IoIosArrowUp
              className="caret"
              onClick={() => setActivityToggle(!activityToggle)}
            />
          )}
        </td>
      </tr>
      {activityToggle && (
        <Work key={`work_${actvityItem.id}`} workItem={actvityItem.subRows} />
      )}
    </>
  );
};

export default Activity;
