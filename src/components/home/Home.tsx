import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

export default function Home() {
    const navigate = useNavigate();

    const handleNavigationToBreakOutRoom = () => {
        navigate('/breakout-room')
    }

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <h1>R&D project to create breakout rooms</h1>
            <Button onClick={handleNavigationToBreakOutRoom} variant="contained">Go to Breakout Room</Button>
        </Grid>
    );
}