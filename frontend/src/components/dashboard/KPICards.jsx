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

            {

                kpiData.map((item, index) => (

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={item.title}
                    >

                        <Card

                            sx={{

                                borderRadius: 5,

                                background:
                                    "linear-gradient(135deg,#0F172A,#1E293B)",

                                color: "white",

                                transition: "0.3s",

                                cursor: "pointer",

                                "&:hover": {

                                    transform: "translateY(-8px)",

                                    boxShadow:
                                        "0px 15px 40px rgba(34,211,238,.25)",

                                },

                            }}

                        >

                            <CardContent>

                                <Box

                                    display="flex"

                                    justifyContent="space-between"

                                    alignItems="center"

                                >

                                    <Box>

                                        <Typography

                                            sx={{
                                                color: "#94A3B8",
                                                fontSize: 15,
                                            }}

                                        >

                                            {item.title}

                                        </Typography>

                                        <Typography

                                            sx={{
                                                fontSize: 36,
                                                fontWeight: 800,
                                                mt: 1,
                                            }}

                                        >

                                            {item.value}

                                        </Typography>

                                    </Box>

                                    <Box

                                        sx={{

                                            width: 60,

                                            height: 60,

                                            borderRadius: "18px",

                                            background:
                                                "rgba(34,211,238,.15)",

                                            display: "flex",

                                            justifyContent: "center",

                                            alignItems: "center",

                                            color: "#22D3EE",

                                        }}

                                    >

                                        {icons[index]}

                                    </Box>

                                </Box>

                                <Box mt={3}>

                                    <Typography

                                        sx={{
                                            color: "#4ADE80",
                                            fontWeight: 700,
                                        }}

                                    >

                                        ▲ {item.change}

                                    </Typography>

                                </Box>

                            </CardContent>

                        </Card>

                    </Grid>

                ))

            }

        </Grid>

    );

}