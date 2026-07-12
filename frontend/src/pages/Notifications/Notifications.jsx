import ProtectedLayout from "../../components/layout/ProtectedLayout";
import { Typography } from "@mui/material";

export default function Notifications() {
    return (
        <ProtectedLayout>
            <Typography variant="h4">
                Notifications
            </Typography>
        </ProtectedLayout>
    );
}