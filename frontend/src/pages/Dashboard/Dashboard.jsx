import {
    Typography,
    Box,
    Button
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

import ProtectedLayout from "../../components/layout/ProtectedLayout";

import KPICards from "../../components/dashboard/KPICards";
import DashboardCharts from "../../components/dashboard/DashboardCharts";
import RecentAssets from "../../components/dashboard/RecentAssets";

export default function Dashboard() {

    return (

        <ProtectedLayout>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
            >

                <Box>

                    <Typography
                        variant="h3"
                        fontWeight="bold"
                    >

                        Welcome Back, Aditya 👋

                    </Typography>

                    <Typography
                        color="text.secondary"
                        mt={1}
                    >

                        Here's what's happening with your enterprise assets today.

                    </Typography>

                </Box>

                <Box
                    display="flex"
                    gap={2}
                >

                    <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                    >

                        Export Report

                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                    >

                        Add Asset

                    </Button>

                </Box>

            </Box>

            <KPICards />

            <Box mt={4}>

                <DashboardCharts />

            </Box>

            <Box mt={4}>

                <RecentAssets />

            </Box>

        </ProtectedLayout>

    );

}