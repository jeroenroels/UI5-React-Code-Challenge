import { Badge, Label } from "@ui5/webcomponents-react";
import { Table, TableRow, TableColumn, TableCell } from "@ui5/webcomponents-react";
import { AnalyticalTable } from "@ui5/webcomponents-react";

const tableData = [
  {
    id: 1,
    title: "Create table",
    status: "Completed",
  },
  {
    id: 2,
    title: "Load table with data",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Use custom status component",
    status: "Not Started",
  },
  {
    id: 4,
    title: "Create table search",
    status: "Blocked",
  },
];

const formatStatusCode = (status) => {
  if (status === "Completed") {
    return 8;
  } else if (status === "In Progress") {
    return 1;
  } else if (status === "Blocked") {
    return 3;
  } else {
    return 10;
  }
};

function Solution() {
  return (
    <>
      <Label>Display table below</Label>
      <Table
        columns={
          <>
            <TableColumn style={{ width: '12rem' }}>
              <Label>ID</Label>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <Label>Title</Label>
            </TableColumn>
            <TableColumn>
              <Label>Status</Label>
            </TableColumn>
          </>
        }
        onRowClick={function ka() { }}
      >
        {
          tableData.length && tableData.map(tableLine =>
          (<TableRow key={tableLine.id}>
            <TableCell>
              <Label>{tableLine.id}</Label>
            </TableCell>
            <TableCell>
              <Label>{tableLine.title}</Label>
            </TableCell>
            <TableCell>
              <Badge colorScheme={formatStatusCode(tableLine.status)}>{tableLine.status}</Badge>       
            </TableCell>
          </TableRow>)
          )
        }
      </Table>


      <AnalyticalTable
        columns={[
          {
            Header: 'ID',
            accessor: 'id',
            headerTooltip: 'ID'
          },
          {
            Header: 'Title',
            accessor: 'title',
            headerTooltip: 'Title'
          },
          {
            Header: 'Status',
            accessor: 'status',
            Cell: (instance) => (<Badge colorScheme={formatStatusCode(instance.value)}>{instance.value}</Badge>)
          },
          {
            Cell: function ka() { },
            Header: 'Actions',
            accessor: '.',
            disableFilters: true,
            disableGroupBy: true,
            disableResizing: true,
            disableSortBy: true,
            id: 'actions',
            minWidth: 100,
            width: 100
          }
        ]}
        data={tableData}
        filterable
        groupBy={[]}
        groupable
        header="Table Title"
        infiniteScroll
        onColumnsReorder={function ka() { }}
        onGroup={function ka() { }}
        onLoadMore={function ka() { }}
        onRowClick={function ka() { }}
        onRowExpandChange={function ka() { }}
        onRowSelect={function ka() { }}
        onSort={function ka() { }}
        onTableScroll={function ka() { }}
        selectedRowIds={{
          '3': true
        }}
        selectionMode="SingleSelect"
        tableHooks={[]}
        withRowHighlight
      />
    </>
  );
}

export default Solution;
