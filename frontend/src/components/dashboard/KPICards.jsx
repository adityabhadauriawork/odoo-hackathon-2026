import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";

import {
    MdInventory,
    MdCheckCircle,
    MdBuild,
    MdTrendingUp
} from "react-icons/md";

import { kpiData } from "../../data/dashboardData";

const icons = [
    <MdInventory size={32} />,
    <MdCheckCircle size={32} />,
    <MdBuild size={32} />,
    <MdTrendingUp size={32} />,
];

export default function KPICards() {

    return (

        <Grid container spacing={3}>

            {kpiData.map((item, index) => (

                <Grid
                    key={item.title}
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 3,
                    }}
                >

                    <Card
                        sx={{
                            borderRadius: 5,
                            background:
                                "linear-gradient(135deg,#0F172A,#1E293B)",
                            color: "white",
                            height: "100%",
                            transition: ".3s",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow:
                                    "0 15px 40px rgba(34,211,238,.25)"
                            }
                        }}
                    >

                        <CardContent>

                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >

                                <Box>

                                    <Typography color="#94A3B8">
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: 36,
                                            fontWeight: 800,
                                            mt: 1
                                        }}
                                    >
                                        {item.value}
                                    </Typography>

                                </Box>

                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 3,
                                        bgcolor: "rgba(34,211,238,.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#22D3EE"
                                    }}
                                >
                                    {icons[index]}
                                </Box>

                            </Box>

                            <Typography
                                sx={{
                                    mt: 3,
                                    color: "#4ADE80",
                                    fontWeight: 700
                                }}
                            >
                                ▲ {item.change}
                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

            ))}

        </Grid>

    );

}