import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useDispatch } from 'react-redux';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { deleteDoctor } from '../../../actions/doctors';
import "./Styles.css"


import useStyles from './styles';


const Doctor = ({ doctor, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const pdfGenerate = ({ }) => {
        var doc = new jsPDF('portrait', 'px', 'a4', 'false');


        doc.setFontSize(28);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0, 0, 128)
        doc.text(152, 60, "Doctor Profile");

        doc.addImage(doctor.selectedFile, 'PNG', 135, 80, 180, 200);

        autoTable(doc, { html: '#my-table' })
        doc.autoTable({
            startY: 290,
            margin: 50,
            theme: 'plain',
            columnStyles: { 0: { halign: 'center' } },
            alternateRowStyles: { fontSize: 18, fontStyle: 'bold' },
            body: [

                [[doctor.fullName]],
            ],
        })

        var date = new Date().toLocaleDateString();


        doc.autoTable({
            startY: 320,
            margin: 50,
            columnStyles: { 1: { halign: 'right' } },
            head: [['', 'Doctor Details']],
            body: [
                ['Full Name', [doctor.fullName]],
                ['Email', [doctor.email]],
                ['Phone Number', [doctor.phoneNumber]],
                ['Gender', [doctor.gender]],
                ['Date of Birth', [doctor.birthday]],
                ['SLMC Number', [doctor.slmcNo]],
                ['Doctor Speciality', [doctor.speciality]],
                ['Qualifications', [doctor.qualification]],

            ],
        })
        doc.autoTable({
            startY: 560,
            margin: 50,
            theme: 'plain',

            columnStyles: { 1: { halign: 'right' } },
            alternateRowStyles: { fontSize: 8, fontStyle: 'italic' },
            body: [

                ['Life Care Center', 'Generated on' + ' ' + [date]],
            ],
        })
        doc.save('Report.pdf');
    }

    return (
        <Card className={classes.card} raised elevation={6}>
            <div class="">
                <div class="">
                    <div class="pt-3 ">
                        <div class="">
                            <div class=" div1 row py-0 px-0">
                                <div class="col-3 mt-2">
                                </div>

                                <div class="col-6 d-flex justify-content-center">
                                    <img className='pofImg' src={doctor.selectedFile} height="" style={{ width: "300px", height: "200px", borderRadius: '3%' }} />
                                </div>
                                <div>
                                    <div class=" col-3 d-flex flex-column pl-4 ml-2">
                                        <button class="btn discBtn text-white p-1 p-md-2"
                                            onClick={pdfGenerate}
                                        ><i class="fas fa-download"></i></button>
                                    </div>
                                </div>

                            </div>

                            <div class=" p-4 ">
                                <div className='details'>
                                    <h5>{doctor.fullName}</h5>
                                    <p>Email: {doctor.email} </p>
                                    <p>Phone Number: {doctor.phoneNumber}</p>
                                    <p>Gender: {doctor.gender} </p>
                                    <p>Date of Birth: {doctor.birthday} </p>
                                    <p>SLMC Number: {doctor.slmcNo} </p>
                                    <p>speciality: {doctor.speciality} </p>
                                    <p>Qualifications: {doctor.qualification} </p>
                                </div>
                                <div class="d-flex">
                                    <button class="edit d-flex ml-auto font-weight-bold pl-4 pr-5 py-2 border-0"
                                        onClick={() => setCurrentId(doctor._id)}
                                    > Edit </button> <span class="edbtn text-white d-flex p-2"><i onClick={() => setCurrentId(doctor._id)} class="fas fa-edit p-1"></i></span>
                                    <button
                                        class="delete d-flex ml-auto font-weight-bold pl-4 pr-5 py-2 border-0"
                                        data-toggle="modal" data-target="#exampleModalCenter"> Delete</button> 
                                        <span class="delbtn text-white d-flex p-2">
                                            <i class="fas fa-trash p-1" data-toggle="modal" data-target="#exampleModalCenter"></i>
                                        </span>

                                                                                                            
                                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLongTitle">Are you sure delete doctor ?</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteDoctor(doctor._id))}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default Doctor;
