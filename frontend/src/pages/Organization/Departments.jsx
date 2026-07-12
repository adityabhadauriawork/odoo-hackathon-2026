import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";

const departments = [

    {
        name: "IT",
        head: "Rahul Sharma",
        parent: "-",
        status: "Active"
    },

    {
        name: "HR",
        head: "Priya Singh",
        parent: "-",
        status: "Active"
    },

    {
        name: "Finance",
        head: "Ankit Verma",
        parent: "-",
        status: "Active"
    }

];

export default function Departments() {

    return (

        <Paper>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell><b>Department</b></TableCell>

                        <TableCell><b>Head</b></TableCell>

                        <TableCell><b>Parent</b></TableCell>

                        <TableCell><b>Status</b></TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {departments.map((dept) => (

                        <TableRow key={dept.name}>

                            <TableCell>{dept.name}</TableCell>

                            <TableCell>{dept.head}</TableCell>

                            <TableCell>{dept.parent}</TableCell>

                            <TableCell>{dept.status}</TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

        </Paper>

    );

}