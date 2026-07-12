import { Grid, Card, CardContent, Typography } from "@mui/material";
import { kpiData } from "../../data/dashboardData";

export default function KPICards() {
  return (
    <Grid container spacing={3}>
      {kpiData.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.title}>
          <Card
            sx={{
              borderLeft: `6px solid ${item.color}`,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Typography color="text.secondary">
                {item.title}
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                {item.value}
              </Typography>

              <Typography color="green">
                {item.change}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}