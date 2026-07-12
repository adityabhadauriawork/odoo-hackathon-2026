import {
    Typography,
    Button,
    TextField,
    MenuItem,
    Grid
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import ProtectedLayout from "../../components/layout/ProtectedLayout";
import AllocationTable from "../../components/allocation/AllocationTable";
import AddAllocationDialog from "../../components/allocation/AddAllocationDialog";

export default function Allocation() {

    const [status, setStatus] = useState("");
    const [open, setOpen] = useState(false);

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >
                Allocation Management
            </Typography>

            <Grid
                container
                spacing={2}
                mb={3}
                alignItems="center"
            >

                {/* Search */}

                <Grid size={{ xs: 12, md: 4 }}>

                    <TextField
                        fullWidth
                        placeholder="Search Employee or Asset"
                    />

                </Grid>

                {/* Status Filter */}

                <Grid size={{ xs: 12, md: 3 }}>

                    <TextField
                        select
                        fullWidth
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >

                        <MenuItem value="">
                            All Status
                        </MenuItem>

                        <MenuItem value="Active">
                            Active
                        </MenuItem>

                        <MenuItem value="Returned">
                            Returned
                        </MenuItem>

                    </TextField>

                </Grid>

                {/* Button */}

                <Grid
                    size={{ xs: 12, md: 5 }}
                    textAlign="right"
                >

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setOpen(true)}
                    >
                        NEW ALLOCATION
                    </Button>

                </Grid>

            </Grid>

            <AllocationTable />

            <AddAllocationDialog
                open={open}
                handleClose={() => setOpen(false)}
            />

        </ProtectedLayout>

    );

}