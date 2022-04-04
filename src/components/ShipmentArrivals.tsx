import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ShipmentsPage} from "../pages/ShipmentsPage";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    totalShipments: {
        color: '#00bcd4',
    },

})

//dummy data for testing purposes only
//TODO: replace with real data / arrange data appropriately for users

const dates = [
    {
        id: 1,
        date: '2022-01-01',
        totalShipments: '1,200'
    },    {
        id: 2,
        date: '2022-01-02',
        totalShipments: '950'

    },    {
        id: 3,
        date: '2022-01-03',
        totalShipments: '1,450'

    },    {
        id: 4,
        date: '2022-01-04',
        totalShipments: '13,950'

    },    {
        id: 5,
        date: '2022-01-05',
        status: 'Arrived',
        totalShipments: '10,110'

    },    {
        id: 6,
        date: '2022-01-06',
        status: 'Arrived',
        totalShipments: '6,290'


    },    {
        id: 7,
        date: '2022-01-07',
        status: 'Arrived',
        totalShipments: '22,840'

    },
]
export default function ShipmentArrivals() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            {dates.map(date => (
                <Accordion key={date.id} expanded={expanded === `panel${date.id}`} onChange={handleChange(`panel${date.id}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${date.id}bh-content`}
                        id={`panel${date.id}bh-header`}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Shipping arrivals for {date.date}</Typography>
                        <Typography  sx={{ color: 'text.secondary' }}>Total of <span className={classes.totalShipments}>{date.totalShipments} </span>shipments have arrived</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <ShipmentsPage/>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
