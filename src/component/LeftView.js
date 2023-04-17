import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
export class LeftView extends Component {

    constructor(props) {
        super(props);
        this.state ={
            tableData: []
        };
    }
    handleAddRow = () => {
        const newTableData = [...this.state.tableData];
        newTableData.push({});
        console.log("new table data", newTableData)
        this.setState({
            tableData: newTableData
        });
    }
    handleRefreshTable = () =>{
        const {tableData} = this.state;
        axios.post('/save', {data: tableData}).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    delete = (index) => {
        const newTableData = [...this.state.tableData];
        newTableData.splice(index, 1);
        this.setState({
            tableData: newTableData
        });
    }
    render() {
     const {tableData} = this.state;
    return (
        <Table striped bordered hover size="sm">
          <thead>
              <tr>
                  <th>
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                  </th>
                  <th>
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                  </th>
                  <th>
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                  </th>
                  <th>
                  </th>
                  <th></th>
              </tr>
              <tr>
                  <th className="table-primary" style={{width:"10%"}}>Module</th>
                  <th className="table-primary" style={{width:"10%"}}>Selection ID</th>
                  <th className="table-primary" style={{width:"10%"}}>Type</th>
                  <th className="table-primary" style={{width:"10%"}}>User</th>
                  <th className="table-primary" style={{width:"5%"}}>Delete</th>
              </tr>
          </thead>
          <tbody>
            {}
              <tr>
             
                  <td><Form.Select aria-label="Default select example" className="rounded-0 Type"
                      onChange={(handleChange(idx))}
                      >
                      <option></option>

                      <option value="Network Option">Network Option</option>
                      <option value="Dispatch Option">Dispatch Option</option>

                  </Form.Select>
                  </td>
                  <td>
                      <Form.Control type="text" className="rounded-0 Type" placeholder=" " />
                  </td>
                  <td>
                      <Form.Select aria-label="Default select example" className="rounded-0 Type">
                          <option></option>
                          <option value="Type1">Type1</option>
                          <option value="Type2">Type2</option>
                      </Form.Select></td>
                  <td>
                      <Form.Select aria-label="Default select example" className="rounded-0 Type">
                          <option></option>
                          <option value="UI">UI</option>
                          <option value="User">User</option>
                      </Form.Select>
                  </td>
                  <td><button onClick={() => this.delete(index)}>&#10060;</button></td>
              </tr>
          </tbody>
      </Table>
   
    );
    }
    }
export default LeftView