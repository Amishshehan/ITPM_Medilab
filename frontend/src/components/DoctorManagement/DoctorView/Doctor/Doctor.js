import React from 'react';
import { Card, CardContent, CardMedia, Hidden, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import "./Styles.css"
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

const Doctor = ({ doctor, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const pdfGenerate = ({ }) => {
        var doc = new jsPDF('portrait', 'px', 'a4', 'false');


        doc.setFontSize(28);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(43, 196, 186)
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
        var time = new Date().toLocaleTimeString();

        doc.autoTable({
            startY: 320,
            margin: 50,
            headStyles: { fillColor: [43, 196, 186] },
            columnStyles: { 1: { halign: 'right', cellWidth: 200 } },
            alternateRowStyles: { fillColor: [220, 245, 243] },
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

                ['Medilab', 'Generated on' + ' ' + [date] + ' ' + [time]],
            ],
        })
        doc.save('Report.pdf');
    }



    return (
        <Card className={classes.card} raised elevation={6}>

            <div class="pt-3 ">
                <div class="">
                    <div class=" div1 row py-0 px-0">
                        <div class="col-3 mt-1">
                        </div>

                        <div class="col-6 d-flex justify-content-center">
                            <img className='pofImg' src={doctor.selectedFile} height="" style={{ width: "250px", height: "180px", borderRadius: '3%' }} />
                        </div>
                        <div>
                            <div class=" col-3 d-flex flex-column pl-4 ml-2">
                                <button class="btn discBtn text-white p-1 p-md-2"
                                    onClick={pdfGenerate}
                                ><i class="fas fa-download"></i></button>
                            </div>
                        </div>

                    </div>

                    <div class=" p-3 ">
                        <div className='details'>
                            <h3 style={{ color: "#2bc4ba", textAlign:'center', marginBottom:'15px' }}>{doctor.fullName}</h3>
                            <info>Speciality:  </info><p className='inf'>{doctor.speciality} </p>
                            <info>SLMC Number:  </info><p className='inf'>{doctor.slmcNo} </p>
                            <info>Phone Number: </info><p className='inf'>{doctor.phoneNumber}</p>


                        </div>


                        <div class="collapse" id="collapseExample">
                            <info>Email:</info> <p className='inf'>{doctor.email} </p>
                            <info>Date of Birth: </info><p className='inf'>{doctor.birthday} </p>
                            <info>Gender: </info><p className='inf'> {doctor.gender} </p>
                            <info>Qualifications: </info><p className='inf'>{doctor.qualification} </p>
                        </div>
                        
                        <Button
                            id="read-btn"
                            style={{ marginTop: '15px', marginLeft: '110px', backgroundColor: "#2bc4ba" }}
                            variant="contained"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample">
                            Read More...
                        </Button>

                    </div>
                </div>
            </div>

        </Card >
    );
}

export default Doctor;
