import { Badge, Label, Button, Toolbar, ToolbarSpacer } from "@ui5/webcomponents-react";
import { Table, TableRow, TableColumn, TableCell, TableGrowingMode } from "@ui5/webcomponents-react";
import { fullTableData } from "./utils/data";
import { useState } from "react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import AddRowDialog from "./Components/AddRowDialog";

let tableData = fullTableData;
const statusCodes = {
  "In Progress": 1,
  "Blocked": 2,
  "Completed": 7,
  "Not Started": 10
};

const formatStatusCode = (status) => statusCodes[status];
const deleteTask = (taskId) => {
  tableData = tableData.filter(record => record.id !== taskId);
};
const addTask = (taskData) => {
  const lastId = tableData[tableData.length-1].id;
  taskData.id = lastId + 1;
  tableData.push(taskData);
};
const createRows = (newIndex) => {
  newIndex = newIndex ? (newIndex + 5) : 10;

  if (newIndex > tableData.length) {
    newIndex = tableData.length;
  }

  return tableData.slice(0, newIndex).map((row, index) => (
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
      <TableCell>
        <Button icon="delete"
          onClick={() => deleteTask(row.id)}>
        </Button>
      </TableCell>
    </TableRow>
  ));
};

function Solution() {  
  const [rows, setRows] = useState(createRows(0, 5));
  const onLoadMore = () => setRows(createRows(rows && rows.length));

  return (
    <>
      <Toolbar
        design="Auto"
        onClick={function ka() { }}
        onOverflowChange={function ka() { }}
        toolbarStyle="Standard"
      >
        <ToolbarSpacer />
        <AddRowDialog addNewRow={addTask} />
      </Toolbar>
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
            <TableColumn>
            </TableColumn>
          </>
        }>
        {rows}
      </Table>
    </>

  );
}

export default Solution;
