import ProtectedLayout from "../../components/layout/ProtectedLayout";

import {
    Typography,
    Paper,
    Switch,
    FormControlLabel,
    Divider
} from "@mui/material";

export default function Settings(){

    return(

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >

                Settings

            </Typography>

            <Paper sx={{p:4}}>

                <FormControlLabel

                    control={<Switch defaultChecked />}

                    label="Email Notifications"

                />

                <Divider sx={{my:2}}/>

                <FormControlLabel

                    control={<Switch defaultChecked />}

                    label="Dark Theme"

                />

                <Divider sx={{my:2}}/>

                <FormControlLabel

                    control={<Switch />}

                    label="Two Factor Authentication"

                />

            </Paper>

        </ProtectedLayout>

    )

}