import React from "react";
import { Divider, Grid } from "@material-ui/core";
import { DiReact } from "react-icons/di";
import Element from "./IntoElement/intoElement";


const styles = {
    center: {
        display:' flex',
        justifyContent: 'center',
        alignItems:' center',
        textAlign: 'center',
        minHeight: '100vh',   
        margin:'0px'
    }
}

const Intro = () => {

    const elementData = {
        web: {
            title:'Web Apps',
            des:'Personalized javascript solutions for any type of facility.'
        }
    }

    return(
        <div style={styles.center}>
            <div>
                <h3 className="text-primary">React-Js <DiReact className="h3"/> Developer</h3> 
                <Divider className="bg-primary mb-3"/>
                <Grid container spacing="4">
                        <Grid item xs={6} sm={3}>
                            <Element title={elementData.web.title} des={elementData.web.des}/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Element/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Element/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Element/>
                        </Grid>
                </Grid>
            </div>   
        </div>
    )
}

export default Intro;