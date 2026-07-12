import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound(){

    return(

        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white">

            <h1 className="text-9xl font-black">

                404

            </h1>

            <p className="text-2xl mt-5">

                Page Not Found

            </p>

            <Link to="/">

                <Button
                    variant="contained"
                    sx={{mt:4}}
                >

                    Go Home

                </Button>

            </Link>

        </div>

    )

}