import { useState } from "react";

import ProtectedLayout from "../../components/layout/ProtectedLayout";

import AssetToolbar from "../../components/assets/AssetToolbar";
import AssetTable from "../../components/assets/AssetTable";
import AssetDialog from "../../components/assets/AssetDialog";

export default function AssetList() {

    const [open,setOpen]=useState(false);

    return(

        <ProtectedLayout>

            <h2
                style={{
                    fontSize:"32px",
                    fontWeight:"bold",
                    marginBottom:"20px"
                }}
            >
                Asset Management
            </h2>

            <AssetToolbar
                onAdd={()=>setOpen(true)}
            />

            <AssetTable/>

            <AssetDialog
                open={open}
                onClose={()=>setOpen(false)}
            />

        </ProtectedLayout>

    )

}