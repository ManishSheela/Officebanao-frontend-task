// import React, { useState } from "react";
// import "./overview.css";
// import data from "../../data.json";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
// import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
// const ExpandableTable = ({ data, level = 0 }) => {
//   const [expandedRows, setExpandedRows] = useState({});

//   const handleToggle = (id) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   const getToggleIcon = (item) => {
//     if (level === 0) {
//       return expandedRows[item.id] ? (
//         <FaMinus className="collapseBtn" />
//       ) : (
//         <FaPlus className="collapseBtn" />
//       );
//     } else {
//       return expandedRows[item.id] ? <IoIosArrowUp /> : <IoIosArrowDown />;
//     }
//   };

//   const renderRows = (items) => {
//     return items.map((item) => (
//       <React.Fragment key={item.id}>
//         <tr>
//           <td>
//             <input type="checkbox" />
//           </td>
//           <td>{item.package_name}</td>
//           <td>{item.rate}</td>
//           <td>{item.total}</td>
//           <td>
//             {item.subRows && (
//               <span
//                 style={{ cursor: "pointer" }}
//                 onClick={() => handleToggle(item.id)}
//               >
//                 {getToggleIcon(item)}
//               </span>
//             )}
//           </td>
//         </tr>
//         {expandedRows[item.id] && item.subRows && (
//           <tr>
//             <td colSpan="5">
//               <table>
//                 <tbody>
//                   <ExpandableTable data={item.subRows} level={level + 1} />
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//         )}
//       </React.Fragment>
//     ));
//   };

//   return <>{renderRows(data)}</>;
// };

// const Overview = () => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>
//             <input type="checkbox" />
//           </th>
//           <th>Packages</th>
//           <th>Rate</th>
//           <th>Total</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         <ExpandableTable data={data} />
//       </tbody>
//     </table>
//   );
// };

// export default Overview;
