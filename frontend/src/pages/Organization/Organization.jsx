import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

import ProtectedLayout from "../../components/layout/ProtectedLayout";

import Departments from "./Departments";
import Categories from "./Categories";
import Employees from "./Employees";

export default function Organization() {

    const [tab, setTab] = useState(0);

    return (

        <ProtectedLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
            >
                Organization Management
            </Typography>

            <Tabs
                value={tab}
                onChange={(e, value) => setTab(value)}
            >
                <Tab label="Departments" />
                <Tab label="Categories" />
                <Tab label="Employees" />
            </Tabs>

            <Box mt={3}>

                {tab === 0 && <Departments />}

                {tab === 1 && <Categories />}

                {tab === 2 && <Employees />}

            </Box>

        </ProtectedLayout>

    );

}