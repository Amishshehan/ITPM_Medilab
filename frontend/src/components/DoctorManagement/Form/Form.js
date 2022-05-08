import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid, FormLabel, FormControl, InputLabel, Select } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createDoctor, updateDoctor } from '../actions/doctors';


const Form = ({ currentId, setCurrentId }) => {
  const [doctorData, setDoctorData] = useState({ fullName: '', age: '', email: '', phoneNumber: '', slmcNo: '', speciality: '', gender: '', qualification: '', birthday: '', selectedFile: '' });
  const doctor = useSelector((state) => (currentId ? state.doctors.find((p) => p._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (doctor) setDoctorData(doctor);
  }, [doctor])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateDoctor(currentId, doctorData));
    } else {
      dispatch(createDoctor(doctorData));
    }
    clear();


  }
  const clear = () => {
    setCurrentId(null);
    setDoctorData({ fullName: '', age: '', email: '', phoneNumber: '', slmcNo: '', speciality: '', gender: '', qualification: '', birthday: '', selectedFile: '' });
  }

  return (

    <div class="container">
      <div class=" text-center mt-5 ">
        <h2>{currentId ? 'Edit Doctor' : 'Add New Doctor'}</h2>
      </div>
      <div class="row ">
        <div class="col mx-auto ">
          <div class="shadow-sm p-0 mb-5 bg-body rounded ">
            <div class="card-body bg-light shadow p-3 mb-5 mt-3 bg-body rounded">
              <div class="container ">
                <form id="contact-form" role="form" onSubmit={handleSubmit}>
                  <div class="controls mt-4 mb-4">

                    <div class="row">

                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_name">Full Name *</label>
                          <input
                            required={true}                                                 
                            class="form-control"
                            placeholder="Please Enter Fullname *"
                            value={doctorData.fullName}
                            onChange={(e) => setDoctorData({ ...doctorData, fullName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <label >Email *</label>
                          <input
                            type="email"
                            class="form-control"
                            required
                            placeholder="Please Enter Email *"
                            data-error="Valid email is required."
                            value={doctorData.email}
                            onChange={(e) => setDoctorData({ ...doctorData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Phone Number* (Format: +94 XX XXX XXXX)</label>
                          <input                            
                            class="form-control"
                            placeholder="Please Enter Phone Number *"
                            required
                            pattern='[\+][0-9]{2} [0-9]{2} [0-9]{3} [0-9]{4}'
                            
                            title="Ex. +94 70 123 1234"
                            value={doctorData.phoneNumber}
                            onChange={(e) => setDoctorData({ ...doctorData, phoneNumber: e.target.value })}
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_email">SLMC Number *</label>
                          <input id="form_email"
                            type="tel"
                            class="form-control"
                            required="required"
                            placeholder="Please Enter SLMC Number *"
                            maxLength='5'
                            pattern='[0-9]{5}'
                            title=" You must enter 5 numbers"

                            value={doctorData.slmcNo}
                            onChange={(e) => setDoctorData({ ...doctorData, slmcNo: e.target.value })}
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_need">Doctor Speciality *</label>
                          <select id="form_need"
                            name="need"
                            class="form-select"
                            required="required"
                            data-error="Please Specify Speciality."
                            value={doctorData.speciality}
                            onChange={(e) => setDoctorData({ ...doctorData, speciality: e.target.value })}
                          >
                            <option value="" selected disabled>Select Speciality</option>
                            <option value={'Accupuncture Physician'}>Accupuncture Physician</option>

                                <option value={'Cancer Surgeon'}>Cancer Surgeon</option>

                                <option value={'Dental Surgeon'}>Dental Surgeon</option>

                                <option value={'Diabetic Specialist'}>Diabetic Specialist</option>

                                <option value={'Hair Transplant Surgeon'}>Hair Transplant Surgeon</option>

                                <option value={'Massage Therapist'}>Massage Therapist</option>

                                <option value={'Nuro physician'}>Nuro physician</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_need">Gender *</label>
                          <select id="form_need"
                            class="form-select"
                            required="required"
                            data-error="Please Specify Gender."
                            value={doctorData.gender}
                            onChange={(e) => setDoctorData({ ...doctorData, gender: e.target.value })}
                          >
                            <option value="" selected disabled>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_need">Date of Birth *</label>
                          <input id="form_email"
                            type="date"
                            class="form-control"
                            required
                            data-error="Valid Email is Required."
                            value={doctorData.birthday}
                            onChange={(e) => setDoctorData({ ...doctorData, birthday: e.target.value })}
                          />
                        </div>
                      </div>

                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_message">Qualifications *</label>
                          <textarea id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Type Here..."
                            rows="4"
                            required
                            data-error="Please, leave us a qualification."
                            value={doctorData.qualification}
                            onChange={(e) => setDoctorData({ ...doctorData, qualification: e.target.value })}
                          >
                          </textarea>
                        </div>
                      </div>

                      <Grid item xs={12}>
                        <div class="col-md-6 mt-3 p-0">
                          <FormLabel className={classes.formLabel}>Upload Image</FormLabel>
                          <FileBase required type="file" multiple={false} onDone={({ base64 }) => setDoctorData({ ...doctorData, selectedFile: base64 })} />
                        </div>
                      </Grid>

                      <div class="col-md-6 mt-4">
                        <input
                          type="submit"
                          class="btn btn-secondary btn-send pt-2 btn-block "
                          value="Clear"
                          onClick={clear}
                        />
                      </div>

                      <div class="col-md-6 mt-4">
                        <input
                          type="submit"
                          style={{background:'#2bc4ba',color:'white'}}
                          class="btn btn-send pt-2 btn-block "
                          value={currentId ? 'Edit' : 'Add'}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Form;