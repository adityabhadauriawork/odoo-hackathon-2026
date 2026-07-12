import ProtectedLayout from "../../components/layout/ProtectedLayout";

import {
    Typography,
    Paper,
    FormControlLabel,
    Switch,
    Divider,
} from "@mui/material";

import { useThemeContext } from "../../context/ThemeContext";

export default function Settings() {

    const { darkMode, toggleTheme } = useThemeContext();

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={4}
            >
                Settings
            </Typography>

            <Paper
                sx={{
                    p: 4,
                    borderRadius: 4,
                }}
            >

                <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Email Notifications"
                />

                <Divider sx={{ my: 3 }} />

                <FormControlLabel
                    control={
                        <Switch
                            checked={darkMode}
                            onChange={toggleTheme}
                        />
                    }
                    label="Dark Theme"
                />

                <Divider sx={{ my: 3 }} />

                <FormControlLabel
                    control={<Switch />}
                    label="Two Factor Authentication"
                />

            </Paper>

        </ProtectedLayout>

    );

}