import ProtectedLayout from "../../components/layout/ProtectedLayout";
import { Typography } from "@mui/material";

export default function Profile() {
    return (
        <ProtectedLayout>
            <Typography variant="h4">
                Profile
            </Typography>
        </ProtectedLayout>
    );
}import ProtectedLayout from "../../components/layout/ProtectedLayout";

import {
    Typography,
    Paper,
    Avatar,
    Grid,
    TextField,
    Button
} from "@mui/material";

export default function Profile() {

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={4}
            >
                My Profile
            </Typography>

            <Paper sx={{ p:4 }}>

                <Grid container spacing={4}>

                    <Grid size={{ xs:12 }} textAlign="center">

                        <Avatar
                            sx={{
                                width:120,
                                height:120,
                                margin:"auto",
                                fontSize:40
                            }}
                        >
                            A
                        </Avatar>

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <TextField
                            fullWidth
                            label="Full Name"
                            defaultValue="Aditya Bhadauria"
                        />

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <TextField
                            fullWidth
                            label="Email"
                            defaultValue="admin@assetflow.com"
                        />

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <TextField
                            fullWidth
                            label="Role"
                            defaultValue="Administrator"
                        />

                    </Grid>

                    <Grid size={{ xs:12, md:6 }}>

                        <TextField
                            fullWidth
                            label="Department"
                            defaultValue="IT"
                        />

                    </Grid>

                    <Grid size={{ xs:12 }}>

                        <Button
                            variant="contained"
                            size="large"
                        >
                            Save Changes
                        </Button>

                    </Grid>

                </Grid>

            </Paper>

        </ProtectedLayout>

    );

}