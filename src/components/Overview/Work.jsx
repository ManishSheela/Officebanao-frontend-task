import React from "react";

const Work = ({ workItem }) => {
  return (
    <>
      {workItem.map((item) => {
        return (
          <tr key={item.id}>
            <td></td>
            <td></td>
            <td>
              <input type="checkbox" />
            </td>
            <td>{item.package_name}</td>
            <td>{item.rate}</td>
            <td>{item.total}</td>
            <td></td>
          </tr>
        );
      })}
    </>
  );
};

export default Work;
