import React from 'react';
import { makeStyles, Container} from "@material-ui/core";
import {DateRangePicker} from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import ShipmentArrivals from "../components/ShipmentArrivals";
import {Typography} from "@mui/material";


const useStyles = makeStyles({
    datePicker: {
        margin: '100px 0 25px 0',
    }

})

//TODO: write function to get user input for date range and pass to ShipmentArrivals


export const DashboardPage = () => {
    const classes = useStyles();
    return (
        <div className="field">
            <Container maxWidth='lg'>
                <div className={classes.datePicker}>
            <Typography>
                Please select shipping dates.
            </Typography>
            <DateRangePicker id='dates' placeholder="Select Start Date and End Date" showWeekNumbers />
                </div>
            <ShipmentArrivals/>
            </Container>
        </div>
    )

}


