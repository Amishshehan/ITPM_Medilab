import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getDoctors, getDoctorsBySearch } from '../../components/DoctorManagement/actions/doctors';
import Pagination from '../DoctorManagement/Pagination';
import Doctors from './DoctorView/Doctors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DocImg from '../DoctorManagement/images/Doc.jpg'
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
            history.push(`/doctorsdetails/search?searchQuery=${search || 'none'}`);
        } else {
            history.push('/doctorsdetails')
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchDoctor();
        }
    };

    return (
        <Container maxidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <div  position="static" color="inherit" style={{ marginTop: '170px', marginBottom: '20px', float:'left',marginLeft:"25px" }}>
                        <Typography className={classes.heading} varient="h2" align="center">Doctors Information</Typography>
                    </div>
                </Grid>
                <Grid item xs={6} md={4} style={{ marginTop: '140px', marginBottom: '50px', }}>
                    <AppBar className={stClasses.appBarSearch} position="static" color="inherit" >
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <TextField
                                    name="search"
                                    variant="outlined"
                                    label="Search Doctors"
                                    size='small'                                    
                                    onKeyPress={handleKeyPress}
                                    fullWidth
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Button style={{ marginTop: '0',background:'#2bc4ba'}} onClick={searchDoctor} className={stClasses.searchButton} variant="contained" color="primary">Search</Button>
                            </Grid>
                        </Grid>
                    </AppBar>
                </Grid>
            </Grid>

            <Grow in>
                <Container maxWidth="xl">
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} className={stClasses.gridContainer}>
                        <Grid item xs={12} sm={12}>
                            <div style={{ marginBottom: '50px' }}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            width=""
                                            height="450"
                                            image={DocImg}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Doctor Information
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h6>Our primary goal as health care providers is to place our patients first through clinical excellence and compassionate care. That starts with helping you locate the right consultant to lead you on your journey to better health and well-being. Designed with Modular channel areas for added privacy the Specialist Center provides the widest array of services and a team of expert consultants belonging to numerous medical specialities, providing comprehensive, personalised care.</h6>
                                                <div style={{ marginLeft: '20px' }}>
                                                <tr>&#8226; We have specialists in ALL the fields of healthcare at the Medilab.</tr>
                                                <tr>&#8226; Appointments can be taken over the phone at any time.</tr>
                                                <tr>&#8226; Hospital enquiry hotline works round the clock.</tr>
                                                <tr>&#8226; Location guide map is available and directional signboards are fixed on each floor.</tr>
                                                <tr>&#8226; Channelling and pharmacy facilities are available in each channelling floors.</tr>
                                                <tr>&#8226; Public Relation Officer helps the patient at the channelling reception or OPD entrance.</tr>
                                                <tr>&#8226; Facilities for all diagnostic services under the same roof</tr>
                                                <tr>&#8226; Comfortable waiting space</tr>
                                                <tr>&#8226; Duty doctors are available on-call round the clock in all specialities</tr>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </div>

                            <Doctors setCurrentId={setCurrentId} />
                        </Grid>


                        <Grid item xs={12} sm={12}>

                            <Paper elevation={6} style={{ marginBottom: '40px', marginTop: '50px', marginLeft: '150px', marginRight: '150px' }}>
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