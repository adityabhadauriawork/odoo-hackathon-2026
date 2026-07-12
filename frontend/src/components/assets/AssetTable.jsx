import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import StatusBadge from "./StatusBadge";
import { assets } from "../../data/assetsData";

export default function AssetTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: 3 }}
    >
      <Table>

        <TableHead>

          <TableRow>

            <TableCell><b>ID</b></TableCell>

            <TableCell><b>Asset</b></TableCell>

            <TableCell><b>Category</b></TableCell>

            <TableCell><b>Assigned To</b></TableCell>

            <TableCell><b>Location</b></TableCell>

            <TableCell><b>Status</b></TableCell>

            <TableCell><b>Actions</b></TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {assets.map((asset) => (

            <TableRow
              key={asset.id}
              hover
            >

              <TableCell>{asset.id}</TableCell>

              <TableCell>{asset.name}</TableCell>

              <TableCell>{asset.category}</TableCell>

              <TableCell>{asset.assignedTo}</TableCell>

              <TableCell>{asset.location}</TableCell>

              <TableCell>

                <StatusBadge
                  status={asset.status}
                />

              </TableCell>

              <TableCell>

                <IconButton>

                  <VisibilityIcon />

                </IconButton>

                <IconButton>

                  <EditIcon />

                </IconButton>

                <IconButton color="error">

                  <DeleteIcon />

                </IconButton>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </TableContainer>
  );
}