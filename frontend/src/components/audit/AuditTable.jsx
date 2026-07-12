import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip
} from "@mui/material";

import { auditLogs } from "../../data/auditData";

export default function AuditTable() {

    return (

        <Paper>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell><b>User</b></TableCell>
                        <TableCell><b>Action</b></TableCell>
                        <TableCell><b>Time</b></TableCell>
                        <TableCell><b>IP Address</b></TableCell>
                        <TableCell><b>Result</b></TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        auditLogs.map((log) => (

                            <TableRow key={log.id}>

                                <TableCell>{log.user}</TableCell>

                                <TableCell>{log.action}</TableCell>

                                <TableCell>{log.time}</TableCell>

                                <TableCell>{log.ip}</TableCell>

                                <TableCell>

                                    <Chip

                                        label={log.result}

                                        color={

                                            log.result === "Success"

                                                ? "success"

                                                : "error"

                                        }

                                    />

                                </TableCell>

                            </TableRow>

                        ))

                    }

                </TableBody>

            </Table>

        </Paper>

    );

}