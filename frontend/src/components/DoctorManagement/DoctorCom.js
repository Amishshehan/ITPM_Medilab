import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getDoctors, getDoctorsBySearch } from './actions/doctors';
import Pagination from './Pagination';
import Doctors from './Doctors/Doctors';
import Form from './Form/Form';
import useStyles from '../../styles';
import doctorUseStyles from './stComStyles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const DoctorCom = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const stClasses = doctorUseStyles();
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getDoctors());
    }, [currentId, dispatch]);

    const searchDoctor = () => {
        if (search.trim()) {
            dispatch(getDoctorsBySearch({ search }));
            history.push(`/doctors/search?searchQuery=${search || 'none'}`);
        } else {
            history.push('/doctors')
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchDoctor();
        }
    };

    return (
        <Container maxidth="lg">

            <div className={classes.appBar} position="static" color="inherit" style={{ marginTop: '140px', marginBottom: '20px' }}>
                <Typography className={classes.heading} style={{ alignItems:'flex-start' }} varient="h2" align="center">Doctors</Typography>                
            </div>
            <Grow in>
                <Container maxWidth="xl">
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} className={stClasses.gridContainer}>
                        <Grid item xs={12} sm={5}>
                            <AppBar className={stClasses.appBarSearch} position="static" color="inherit">
                                <TextField
                                    name="search"
                                    variant="outlined"
                                    label="Search Doctors"
                                    onKeyPress={handleKeyPress}
                                    fullWidth
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <Button onClick={searchDoctor} className={stClasses.searchButton} variant="contained" style={{backgroundColor:"#2bc4ba",color:'#FFFFFF', fontWeight:'bold',}}>Search</Button>
                            </AppBar>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Doctors setCurrentId={setCurrentId} />
                            <Paper elevation={6} style={{ marginBottom: '100px', marginTop:'50px', }}>
                                <Pagination />
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    );

}

export default DoctorCom;