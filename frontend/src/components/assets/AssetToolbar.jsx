import {
  Box,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function AssetToolbar({ onAdd }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mb={3}
      gap={2}
      flexWrap="wrap"
    >
      <TextField
        label="Search Assets"
        variant="outlined"
        size="small"
        sx={{ width: 300 }}
      />

      <Box display="flex" gap={2}>

        <TextField
          select
          size="small"
          label="Status"
          sx={{ width: 180 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="allocated">Allocated</MenuItem>
          <MenuItem value="maintenance">Maintenance</MenuItem>
        </TextField>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAdd}
        >
          Add Asset
        </Button>

      </Box>

    </Box>
  );
}