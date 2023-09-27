import { Label } from "@ui5/webcomponents-react";
import { Table, TableRow, TableColumn, TableCell } from "@ui5/webcomponents-react";

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
              <Label>
                {tableLine.id}
              </Label>
            </TableCell>
            <TableCell>
              <Label>
                {tableLine.title}
              </Label>
            </TableCell>
            <TableCell>
              <Label>
                {tableLine.status}
              </Label>
            </TableCell>
          </TableRow>)
          )
        }
      </Table>
    </>
  );
}

export default Solution;
