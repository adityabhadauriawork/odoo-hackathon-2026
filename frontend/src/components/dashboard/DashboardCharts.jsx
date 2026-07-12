import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { assetDistribution } from "../../data/dashboardData";

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#7C3AED",
];

export default function DashboardCharts() {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>

      <Grid item xs={12} md={6}>

        <Card sx={{ borderRadius: 3 }}>

          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Asset Distribution
            </Typography>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>

                <Pie
                  data={assetDistribution}
                  dataKey="value"
                  outerRadius={100}
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

      <Grid item xs={12} md={6}>

        <Card
          sx={{
            borderRadius: 3,
            height: "100%",
          }}
        >

          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Quick Insights
            </Typography>

            <Typography mt={2}>
              ✅ 184 assets allocated
            </Typography>

            <Typography mt={2}>
              ⚠️ 18 assets under maintenance
            </Typography>

            <Typography mt={2}>
              📅 27 active bookings
            </Typography>

            <Typography mt={2}>
              🔍 Audit scheduled tomorrow
            </Typography>

          </CardContent>

        </Card>

      </Grid>

    </Grid>
  );
}