import {
    Typography,
    Grid,
    Button,
    TextField
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import ProtectedLayout from "../../components/layout/ProtectedLayout";

import BookingTable from "../../components/booking/BookingTable";

export default function Booking() {

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >

                Booking Management

            </Typography>

            <Grid
                container
                spacing={2}
                mb={3}
            >

                <Grid size={{ xs: 12, md: 8 }}>

                    <TextField

                        fullWidth

                        placeholder="Search Booking"

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

                        NEW BOOKING

                    </Button>

                </Grid>

            </Grid>

            <BookingTable />

        </ProtectedLayout>

    );

}