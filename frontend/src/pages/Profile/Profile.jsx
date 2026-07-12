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
}