import React, { useState, useMemo, useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import Pagination from "../components/pagination";
import data from "../schools.json";
import "../css/schools.css";

let PageSize = 20;

export default function Schools() {
  const [schools, setSchools] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return schools.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, schools]);

  const search = () => {
    setCurrentPage(1);
    setSchools(
      data.filter((school) => {
        const query = document.getElementById("search_box").value;
        return school.properties.name
          .toLowerCase()
          .includes(query.toLowerCase());
        // school.properties.name.toLowerCase().includes(query.toLowerCase())
      })
    );
  };

  return (
    <div className="container schools_container">
      <div className="top" id="top">
        <div className="search">
          <input
            id="search_box"
            name="search"
            type={"search"}
            onChange={search}
            placeholder={"Type to Search"}
          />
          <FaSearch
            color="white"
            className="search-icon"
            type="submit"
            onClick={search}
          />
        </div>
      </div>
      <div className="schools_table">
        <table className="schools">
          <thead>
            <tr>
              <th>logo</th>
              <th>
                School
                <FaChevronDown className="chevron" />
              </th>
              <th>
                Category
                <FaChevronDown className="chevron" />
              </th>
              <th>
                Type
                <FaChevronDown className="chevron" />
              </th>
              <th>
                State
                <FaChevronDown className="chevron" />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item) => {
              return (
                <tr>
                  <td>
                    <img src={require("../img/saga.png")} />
                  </td>
                  <td>{item.properties.name}</td>
                  <td>{item.properties.category}</td>
                  <td>{item.properties.management}</td>
                  <td>{item.properties.state_code + "T"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => {
            setCurrentPage(page);
            const element = document.getElementById("top");
            element.scroll({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
}
// const loadSchools = () => {
//   document.querySelector(".schools").innerHTML = `<thead>
//   <td>logo</td>
//   <td>
//     School
//     <FaChevronDown className="chevron" />
//   </td>
//   <td>
//     City
//     <FaChevronDown className="chevron" />
//   </td>
//   <td>
//     State
//     <FaChevronDown className="chevron" />
//   </td>
//   <td>
//     Ratings
//     <FaChevronDown className="chevron" />
//   </td>
// </thead>`;
//   schools.forEach((school) => {
//     let html = `
//       <tr>
//       <td>
//       <img src={require("../img/saga.png")} style={{ width: 30 }} />
//       </td>
//       <td>${school.properties.name}</td>
//       <td>${school.properties.category}</td>
//       <td>${school.properties.management}</td>
//       <td>${school.properties.lga_name}</td>
//       </tr>
//       `;
//     document.querySelector(".schools").innerHTML += html;
//   });
// };
