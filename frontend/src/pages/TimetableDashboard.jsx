import React, { Component } from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class TimetableDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
      colDefs: [
        { field: 'subject' },
        { field: 'term_code' },
        { field: 'createdAt' },
      ]
    }
  }

  componentDidMount() {
    fetch('https://____')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
  }

  render() {
    return (
      <><div>Timetable Dashboard</div>
        <div
          className="ag-theme-balham"
          style={{ height: '200px', width: '600px' }}
        >
          <AgGridReact
            pagination={true}
            defaultColDef={{ sortable: true, filter: true }}
            rowData={this.state.rowData}
            columnDefs={this.state.colDefs}
          >


          </AgGridReact>
        </div>
      </>
    );
  }
}

export default TimetableDashboard;
