import React, { useState, useCallback } from "react";
import "./sidebar.css";
import { RxCross2 } from "react-icons/rx";

const initialValue = {
  client: "",
  date_of_commencement: "",
  date_of_completion: "",
  RFQ: "",
};

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [selectedValues, setSelectedValues] = useState(initialValue);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleBackdropClick = useCallback(() => {
    setCollapsed(false);
  }, []);

  const handleOnchange = (event) => {
    setSelectedValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const isFormValid = Object.values(selectedValues).every(
      (value) => value.trim() !== ""
    );
    if (
      new Date(selectedValues.date_of_commencement) >
      new Date(selectedValues.date_of_completion)
    ) {
      alert("date_of_completion can't be greater");
      return;
    }
    if (isFormValid) {
      console.log(selectedValues);
      setSelectedValues(initialValue);
      alert("Data sent to the Console");
    } else {
      alert("Please fill in all details.");
    }
  };

  return (
    <>
      <div
        className={`overlay ${collapsed ? "visible" : ""}`}
        onClick={handleBackdropClick}
      ></div>
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="heading">
          <span>Workorder</span>
          <RxCross2 className="closeBtn" onClick={toggleSidebar} />
        </div>

        <div className="content">
          <form id="form" onSubmit={onSubmit}>
            <div className="input-control">
              <label htmlFor="client">Client</label>
              <select
                id="client"
                name="client"
                value={selectedValues.client}
                onChange={handleOnchange}
              >
                <option value="" disabled>
                  Client Name
                </option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
              </select>
            </div>
            <div className="input-control">
              <label htmlFor="date_of_commencement">Date of Commencement</label>
              <input
                id="date_of_commencement"
                name="date_of_commencement"
                value={selectedValues.date_of_commencement}
                onChange={handleOnchange}
                type="date"
              />
            </div>
            <div className="input-control">
              <label htmlFor="date_of_completion">Date of Completion</label>
              <input
                id="date_of_completion"
                name="date_of_completion"
                value={selectedValues.date_of_completion}
                onChange={handleOnchange}
                type="date"
              />
            </div>
            <div className="input-control">
              <label htmlFor="RFQ">RFQ Code</label>
              <input
                id="RFQ"
                name="RFQ"
                type="text"
                value={selectedValues.RFQ}
                onChange={handleOnchange}
                placeholder="RFQ Code"
              />
            </div>
            <button className="btn doneBtn" type="submit">
              Done
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar);
