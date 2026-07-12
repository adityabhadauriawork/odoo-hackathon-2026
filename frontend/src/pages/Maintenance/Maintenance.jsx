import {
    Typography,
    Grid,
    Button,
    TextField
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import ProtectedLayout from "../../components/layout/ProtectedLayout";

import MaintenanceTable from "../../components/maintenance/MaintenanceTable";

export default function Maintenance() {

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >
                Maintenance Management
            </Typography>

            <Grid
                container
                spacing={2}
                mb={3}
            >

                <Grid size={{ xs: 12, md: 8 }}>

                    <TextField
                        fullWidth
                        placeholder="Search Maintenance Ticket"
                    />

                </Grid>

                <Grid
                    size={{ xs: 12, md: 4 }}
                    textAlign="right"
                >

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                    >
                        RAISE TICKET
                    </Button>

                </Grid>

            </Grid>

            <MaintenanceTable />

        </ProtectedLayout>

    );

}