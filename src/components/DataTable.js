import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import DataTableHeader from './DataTableHeader';
import DataTableFooter from './DataTableFooter';
import DataTableBody from './DataTableBody';

const applyFilters = (data, page, rowsPerPage) => {
  const start = page * rowsPerPage;
  const end = start * rowsPerPage + rowsPerPage;
  if(!data)
    return []; //return an empty array if data is undefined
  else
    return data.slice(start, end);

};

class DataTable extends React.Component {
  render() {
    const {
      data,
      dataTable: {page, rowsPerPage, query, ascending, orderBy, columns},
      handleRequestSort,
      handleChangePage,
      handleChangeRowsPerPage
    } = this.props;
    const filteredData = applyFilters(data, page, rowsPerPage);
    return [
        <Table aria-labelledby="tableTitle" key="Table">
        <DataTableHeader
      ascending={ascending}
      orderBy={orderBy}
      handleRequestSort={handleRequestSort}
      columns={columns}
        />
        <DataTableBody
      data={filteredData}
      rowsPerPage={rowsPerPage}
      page={page}
        />
        </Table>,
      <DataTableFooter
        key="TableFooter"
        page={page}
        numRows={data.length}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage} />];
      }
      }

      DataTable.propTypes = {
        dataTable: PropTypes.object.isRequired,
        data: PropTypes.array.isRequired,
        handleChangePage: PropTypes.func.isRequired,
        handleChangeRowsPerPage: PropTypes.func.isRequired,
        handleRequestSort: PropTypes.func.isRequired
      };

      export default DataTable;
