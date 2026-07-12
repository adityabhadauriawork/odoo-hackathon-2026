import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip,
    IconButton
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

import { allocations } from "../../data/allocationData";

export default function AllocationTable() {

    return (

        <Paper>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell><b>Asset</b></TableCell>
                        <TableCell><b>Employee</b></TableCell>
                        <TableCell><b>Department</b></TableCell>
                        <TableCell><b>Date</b></TableCell>
                        <TableCell><b>Status</b></TableCell>
                        <TableCell><b>Action</b></TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {allocations.map((row) => (

                        <TableRow key={row.id}>

                            <TableCell>{row.asset}</TableCell>
                            <TableCell>{row.employee}</TableCell>
                            <TableCell>{row.department}</TableCell>
                            <TableCell>{row.allocatedDate}</TableCell>

                            <TableCell>

                                <Chip
                                    label={row.status}
                                    color={row.status === "Active" ? "success" : "default"}
                                />

                            </TableCell>

                            <TableCell>

                                <IconButton>

                                    <VisibilityIcon />

                                </IconButton>

                                <IconButton>

                                    <AssignmentReturnIcon />

                                </IconButton>

                            </TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

        </Paper>

    );

}