import {
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  monthlyAllocation,
  departmentUsage,
} from "../../data/reportData";

const COLORS = [
  "#1976d2",
  "#2e7d32",
  "#ed6c02",
  "#9c27b0",
];

export default function ReportsDashboard() {

  return (

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        gap: 3,
      }}
    >

      <Card>

        <CardContent>

          <Typography
            variant="h6"
            mb={2}
          >
            Monthly Allocations
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <BarChart data={monthlyAllocation}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="allocations"
                fill="#1976d2"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </CardContent>

      </Card>

      <Card>

        <CardContent>

          <Typography
            variant="h6"
            mb={2}
          >
            Department Usage
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <PieChart>

              <Pie
                data={departmentUsage}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >

                {departmentUsage.map((entry,index)=>(

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

    </Box>

  );

}