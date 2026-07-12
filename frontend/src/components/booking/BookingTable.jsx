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

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { bookings } from "../../data/bookingData";

export default function BookingTable() {

    const chipColor = (status) => {

        switch (status) {

            case "Approved":
                return "success";

            case "Pending":
                return "warning";

            case "Rejected":
                return "error";

            default:
                return "default";

        }

    };

    return (

        <Paper>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell><b>Employee</b></TableCell>
                        <TableCell><b>Asset</b></TableCell>
                        <TableCell><b>Request Date</b></TableCell>
                        <TableCell><b>Duration</b></TableCell>
                        <TableCell><b>Status</b></TableCell>
                        <TableCell><b>Action</b></TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        bookings.map((booking) => (

                            <TableRow key={booking.id}>

                                <TableCell>{booking.employee}</TableCell>

                                <TableCell>{booking.asset}</TableCell>

                                <TableCell>{booking.requestDate}</TableCell>

                                <TableCell>

                                    {booking.from} - {booking.to}

                                </TableCell>

                                <TableCell>

                                    <Chip

                                        label={booking.status}

                                        color={chipColor(booking.status)}

                                    />

                                </TableCell>

                                <TableCell>

                                    <IconButton>

                                        <VisibilityIcon />

                                    </IconButton>

                                    <IconButton color="success">

                                        <CheckIcon />

                                    </IconButton>

                                    <IconButton color="error">

                                        <CloseIcon />

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