import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Chip
} from "@mui/material";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import {
    MdTrendingUp,
    MdWarningAmber,
    MdCalendarMonth,
    MdVerified
} from "react-icons/md";

import { assetDistribution } from "../../data/dashboardData";

const COLORS = [
    "#22D3EE",
    "#4ADE80",
    "#FACC15",
    "#F87171",
    "#A855F7"
];

const insights = [

    {
        icon: <MdTrendingUp size={22} />,
        title: "184 Assets Allocated",
        color: "#22D3EE"
    },

    {
        icon: <MdWarningAmber size={22} />,
        title: "18 Assets Under Maintenance",
        color: "#FACC15"
    },

    {
        icon: <MdCalendarMonth size={22} />,
        title: "27 Active Bookings",
        color: "#4ADE80"
    },

    {
        icon: <MdVerified size={22} />,
        title: "Audit Scheduled Tomorrow",
        color: "#A855F7"
    }

];

export default function DashboardCharts() {

    return (

        <Grid container spacing={3} sx={{ mt: 1 }}>

            <Grid
                size={{
                    xs: 12,
                    lg: 8
                }}
            >

                <Card
                    sx={{
                        borderRadius: 5,
                        background:
                            "linear-gradient(135deg,#0F172A,#1E293B)",
                        color: "white",
                        height: "100%"
                    }}
                >

                    <CardContent>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            mb={3}
                        >
                            Asset Distribution
                        </Typography>

                        <ResponsiveContainer
                            width="100%"
                            height={380}
                        >

                            <PieChart>

                                <Pie
                                    data={assetDistribution}
                                    dataKey="value"
                                    outerRadius={140}
                                    label
                                >

                                    {assetDistribution.map((entry, index) => (

                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />

                                    ))}

                                </Pie>

                                <Tooltip />

                            </PieChart>

                        </ResponsiveContainer>

                    </CardContent>

                </Card>

            </Grid>

            <Grid
                size={{
                    xs: 12,
                    lg: 4
                }}
            >

                <Card
                    sx={{
                        borderRadius: 5,
                        background:
                            "linear-gradient(135deg,#111827,#1E293B)",
                        color: "white",
                        height: "100%"
                    }}
                >

                    <CardContent>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            mb={4}
                        >
                            Today's Insights
                        </Typography>

                        {insights.map((item, index) => (

                            <Box
                                key={index}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                mb={2}
                                p={2}
                                sx={{
                                    borderRadius: 3,
                                    bgcolor: "rgba(255,255,255,.05)"
                                }}
                            >

                                <Box
                                    display="flex"
                                    gap={2}
                                    alignItems="center"
                                >

                                    <Box color={item.color}>
                                        {item.icon}
                                    </Box>

                                    <Typography>
                                        {item.title}
                                    </Typography>

                                </Box>

                                <Chip
                                    label="Live"
                                    color="success"
                                />

                            </Box>

                        ))}

                    </CardContent>

                </Card>

            </Grid>

        </Grid>

    );

}