import React from "react";

const EmployeeTable = (props) => {
  return (
    <table className="table table-light table-striped table-hover text-center table-sortable">
      {/* header of table */}
      <thead>
        <tr>
          <th scope="col">Image</th>
          
          <th scope="col" data-name="name" data-sortable="true">
            <span onClick={() => props.sortBy("name", "last", "first")}>
              Name
            </span>
          </th>
          {/* LISTENERS FOR SORTING COLUMNS AFTER CLICKED */}
          <th scope="col"><span onClick={() => props.sortBy("phone")}>Phone</span></th>
          <th scope = "col"><span onClick ={() => props.sortBy("email")}>Email</span></th>
          <th scope ="col"><span onClick ={() => props.sortBy("dob","date")}>DOB</span></th>
        </tr>
      </thead>


      {/* body of table */}
      <tbody>
        {/* CREATE A NEW ARRAY OF FIRST AND LAST NAMES */}
        {props.state.filteredEmployees.map((employee) => {
          const {first, last} = employee.name;
          const firstAndLastName = `${first} ${last}`;

          // FORMAT THE DOB DATE
          const dob= props.formatDate(employee.dob.date)

          return (
            <tr key ={employee.login.uuid}>
              <td>
                <img src = {employee.picture.thumbnail} alt={firstAndLastName}/>
              </td>
              <td className ="align-middle">{firstAndLastName}</td>
              <td className ="align-middle">
                <a href={`tel:+1${employee.phone}`}>{employee.phone}</a>
              </td>
              <td className = "align-middle email">
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td className ='align-middle'>{dob}</td>
              </tr>  
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
