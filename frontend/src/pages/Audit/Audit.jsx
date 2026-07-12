import {
    Typography,
    TextField
} from "@mui/material";

import ProtectedLayout from "../../components/layout/ProtectedLayout";

import AuditTable from "../../components/audit/AuditTable";

export default function Audit() {

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >

                Audit Logs

            </Typography>

            <TextField

                fullWidth

                placeholder="Search Audit Logs"

                sx={{ mb: 3 }}

            />

            <AuditTable />

        </ProtectedLayout>

    );

}