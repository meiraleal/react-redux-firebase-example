import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

const DataTableFooter = (props) => (<TablePagination
                                    component="div"
                                    count={props.numRows}
                                    rowsPerPage={props.rowsPerPage}
                                    page={props.page}
                                    backIconButtonProps={{
                                      'aria-label': 'Previous Page',
                                    }}
                                    nextIconButtonProps={{
                                      'aria-label': 'Next Page',
                                    }}
                                    onChangePage={props.handleChangePage}
                                    onChangeRowsPerPage={props.handleChangeRowsPerPage}
                                    />);

DataTableFooter.propTypes = {
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  numRows: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default DataTableFooter;
