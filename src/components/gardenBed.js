import React from "react";
import { Box } from "@mui/material"

function GardenBed({ plantList, gardenWidth, gardenHeight }) {
    const garden = Array.apply(null, Array(gardenHeight)).map((v, h) => { return Array.apply(null, Array(gardenWidth)).map((x, w) => { return h + ',' + w }); });
    return (
        <div>
            {
                garden.map(row => (
                    <div style={{ display: "flex" }} key={ 'r' + row[0] }>
                        {
                            row.map(col => (
                                <Box key={ col } sx={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: 'sandybrown',
                                    border: '1px solid peru',
                                    display: 'inline-block',
                                }}></Box>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default GardenBed;