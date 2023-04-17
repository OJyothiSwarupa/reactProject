import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function RightView() {
  return (
    <Table bordered hover size="m" className="me-2" style={{width:"80%" ,alignSelf : "flex-start"}}>
    
    <thead>
        <tr>
      <th colSpan={4}>Attributes</th>
      </tr>
        <tr>
          <th className="table-primary" style={{width:"30%"}}>Dimensions</th>
          <th className="table-primary" style={{width:"30%"}}>Attribute Name</th>
          <th className="table-primary" style={{width:"30%"}}>Attribute Value</th>
          <th className="table-primary" style={{width:"10%"}}>Delete</th>
        </tr>
    </thead>
      <tbody>
        <tr>
          <td>
          <Form.Select aria-label="Default select example" className="rounded-0 Type">
                      <option></option>
                          <option value="Network Option">Network Option</option>
                          <option value="Dispatch Option">Dispatch Option</option>
                      </Form.Select>
          </td>
          <td>
          <Form.Select aria-label="Default select example" className="rounded-0 Type">
                      <option></option>
                          <option value="Network Option">Network Option</option>
                          <option value="Dispatch Option">Dispatch Option</option>
                      </Form.Select>
          </td>
          <td> <Form.Select aria-label="Default select example" className="rounded-0 Type">
                      <option></option>
                          <option value="Network Option">Network Option</option>
                          <option value="Dispatch Option">Dispatch Option</option>
                      </Form.Select></td>
          <td> &#10060;</td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default RightView;