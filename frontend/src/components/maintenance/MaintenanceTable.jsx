import {
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    IconButton
} from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { maintenance } from "../../data/maintenanceData";

export default function MaintenanceTable() {

    const priorityColor = (priority) => {

        switch (priority) {

            case "High":
                return "error";

            case "Medium":
                return "warning";

            default:
                return "success";

        }

    };

    const statusColor = (status) => {

        switch (status) {

            case "Resolved":
                return "success";

            case "Pending":
                return "warning";

            default:
                return "info";

        }

    };

    return (

        <Paper>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell><b>Asset</b></TableCell>
                        <TableCell><b>Issue</b></TableCell>
                        <TableCell><b>Priority</b></TableCell>
                        <TableCell><b>Engineer</b></TableCell>
                        <TableCell><b>Status</b></TableCell>
                        <TableCell><b>Action</b></TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        maintenance.map((item) => (

                            <TableRow key={item.id}>

                                <TableCell>{item.asset}</TableCell>

                                <TableCell>{item.issue}</TableCell>

                                <TableCell>

                                    <Chip
                                        label={item.priority}
                                        color={priorityColor(item.priority)}
                                    />

                                </TableCell>

                                <TableCell>{item.engineer}</TableCell>

                                <TableCell>

                                    <Chip
                                        label={item.status}
                                        color={statusColor(item.status)}
                                    />

                                </TableCell>

                                <TableCell>

                                    <IconButton>

                                        <VisibilityIcon />

                                    </IconButton>

                                    <IconButton color="primary">

                                        <BuildIcon />

                                    </IconButton>

                                    <IconButton color="success">

                                        <CheckCircleIcon />

                                    </IconButton>

                                </TableCell>

                            </TableRow>

                        ))

                    }

                </TableBody>

            </Table>

        </Paper>

    );

}