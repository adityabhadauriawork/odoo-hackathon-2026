import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { recentAssets } from "../../data/dashboardData";

export default function RecentAssets() {
  return (
    <Card
      sx={{
        mt: 3,
        borderRadius: 3,
      }}
    >

      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Recent Assets
        </Typography>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>ID</TableCell>

              <TableCell>Name</TableCell>

              <TableCell>Category</TableCell>

              <TableCell>Status</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {recentAssets.map((asset) => (

              <TableRow key={asset.id}>

                <TableCell>{asset.id}</TableCell>

                <TableCell>{asset.name}</TableCell>

                <TableCell>{asset.category}</TableCell>

                <TableCell>{asset.status}</TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </CardContent>

    </Card>
  );
}