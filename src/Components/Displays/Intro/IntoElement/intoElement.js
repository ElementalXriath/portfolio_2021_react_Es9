import { Grid } from "@material-ui/core";
import React from "react";

const Element = (props) => {
    return(

        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}  sm={12}>
                    {props.title}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {props.des}
                </Grid>
            </Grid>
        </div>
    )
}

export default Element;