import Typography from "@mui/material/Typography";

import ProtectedLayout from "../../components/layout/ProtectedLayout";

import ReportsDashboard from "../../components/reports/ReportsDashboard";

export default function Reports() {

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >
                Reports & Analytics
            </Typography>

            <ReportsDashboard/>

        </ProtectedLayout>

    );

}