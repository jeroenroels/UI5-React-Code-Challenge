import { Badge, Label } from "@ui5/webcomponents-react";
import { Table, TableRow, TableColumn, TableCell, TableGrowingMode } from "@ui5/webcomponents-react";
import { fullTableData } from "./utils/data";
import { useState } from "react";

const statusCodes = {
  "In Progress": 1,
  "Blocked": 2,
  "Completed": 7,
  "Not Started": 10
};

const formatStatusCode = (status) => statusCodes[status];

const createRows = (newIndex) => {
  newIndex = newIndex ? (newIndex + 5) : 10;

  if (newIndex > fullTableData.length) {
    newIndex = fullTableData.length;
  }

  return fullTableData.slice(0, newIndex).map((row, index) => (
    <TableRow key={`${index + newIndex}-row`}>
      <TableCell>
        <Label>{row.id}</Label>
      </TableCell>
      <TableCell>
        <Label>{row.title}</Label>
      </TableCell>
      <TableCell>
        <Badge colorScheme={formatStatusCode(row.status)}>{row.status}</Badge>
      </TableCell>
    </TableRow>
  ));
};

function Solution() {
  const [rows, setRows] = useState(createRows(0, 5));
  const onLoadMore = () => setRows(createRows(rows && rows.length));

  return (
    <Table
      growingButtonText="More ..."
      onLoadMore={onLoadMore}
      growing={TableGrowingMode.Scroll}
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
      }>
      {rows}
    </Table>
  );
}

export default Solution;
