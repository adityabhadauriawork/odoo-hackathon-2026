import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

export default function AssetDialog({
  open,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Add New Asset</DialogTitle>

      <DialogContent>

        <Grid container spacing={2} sx={{ mt: 1 }}>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Asset Name"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Category"
              select
            >
              <MenuItem>Laptop</MenuItem>
              <MenuItem>Monitor</MenuItem>
              <MenuItem>Mobile</MenuItem>
              <MenuItem>Furniture</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Status"
              select
            >
              <MenuItem>Available</MenuItem>
              <MenuItem>Allocated</MenuItem>
              <MenuItem>Maintenance</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Assigned To"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
            />
          </Grid>

        </Grid>

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
        >
          Save Asset
        </Button>

      </DialogActions>

    </Dialog>
  );
}