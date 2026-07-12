import ProtectedLayout from "../../components/layout/ProtectedLayout";
import {
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Chip
} from "@mui/material";

const notifications = [
    {
        title: "Asset Returned",
        desc: "Dell Latitude 7440 was returned by Rahul Sharma.",
        type: "Success"
    },
    {
        title: "Maintenance Due",
        desc: "HP EliteBook requires scheduled maintenance.",
        type: "Warning"
    },
    {
        title: "Booking Approved",
        desc: "MacBook Pro booking approved for Priya Singh.",
        type: "Info"
    },
    {
        title: "Warranty Expiring",
        desc: "Printer warranty expires in 15 days.",
        type: "Alert"
    }
];

export default function Notifications() {

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >
                Notifications
            </Typography>

            <Paper>

                <List>

                    {notifications.map((item,index)=>(

                        <ListItem
                            key={index}
                            divider
                        >

                            <ListItemText
                                primary={item.title}
                                secondary={item.desc}
                            />

                            <Chip
                                label={item.type}
                                color="primary"
                            />

                        </ListItem>

                    ))}

                </List>

            </Paper>

        </ProtectedLayout>

    );

}