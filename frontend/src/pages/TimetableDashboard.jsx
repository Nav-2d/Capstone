import React, { Component } from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class TimetableDashbaord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [
        { subject: 'INFO', term_code: '202210', createdAt: '01-Jan-2022' },
        { subject: 'INFO', term_code: '202220', createdAt: '01-Jan-2022' },
        { subject: 'INFO', term_code: '202230', createdAt: '01-Jan-2022' }
      ]
    }
  }

  render() {
    return (
      <>

        <div>Timetable Dashboard</div>
        <div
          className="ag-theme-balham"
          style={{ height: '200px', width: '600px' }}
        >
          <AgGridReact
            pagination={true}
            rowData={this.state.rowData}>
            <AgGridColumn field="subject" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="term_code" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="createdAt" sortable={ true } filter={ true }></AgGridColumn>
          </AgGridReact>
        </div>

      </>
    );
  }
}

export default TimetableDashbaord;