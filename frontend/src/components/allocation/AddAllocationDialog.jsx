import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    TextField,
    MenuItem
} from "@mui/material";

export default function AddAllocationDialog({ open, handleClose }) {

    return (

        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >

            <DialogTitle>

                New Asset Allocation

            </DialogTitle>

            <DialogContent>

                <Grid container spacing={2} mt={1}>

                    <Grid size={{ xs: 12 }}>

                        <TextField
                            fullWidth
                            label="Asset"
                        />

                    </Grid>

                    <Grid size={{ xs: 12 }}>

                        <TextField
                            fullWidth
                            label="Employee"
                        />

                    </Grid>

                    <Grid size={{ xs: 6 }}>

                        <TextField
                            select
                            fullWidth
                            label="Department"
                        >

                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="HR">HR</MenuItem>
                            <MenuItem value="Finance">Finance</MenuItem>

                        </TextField>

                    </Grid>

                    <Grid size={{ xs: 6 }}>

                        <TextField
                            type="date"
                            fullWidth
                        />

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>

                <Button onClick={handleClose}>

                    Cancel

                </Button>

                <Button
                    variant="contained"
                >

                    Allocate

                </Button>

            </DialogActions>

        </Dialog>

    );

}