export const handleRequestSort = (event, property) => {
  const orderBy = property;
  let order = 'desc';

  if (this.state.orderBy === property && this.state.order === 'desc') {
    order = 'asc';
  }

  const data =
        order === 'desc'
        ? this.props.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.props.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

  this.setState({ data, order, orderBy });
};

export const handleChangePage = (event, page) => {
  this.setState({ page });
};

export const handleChangeRowsPerPage = event => {
  this.setState({ rowsPerPage: event.target.value });
};
