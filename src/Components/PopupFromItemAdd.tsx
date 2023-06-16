import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useFormik } from 'formik';
import * as yup from 'yup'

const PopupFromItem = (props:any) => {

  const formik = useFormik({
    initialValues: {
      subject: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 1));
    },
  });

  return (
    <div className={`uk-flex uk-flex-top ${props.modal ? "uk-modal uk-open" : "uk-hidden"}`}>

      <div className="uk-modal-dialog uk-modal-medium uk-margin-auto-vertical" >
        <button className="uk-modal-close-default uk-close- uk-border-pill" type="button"
          onClick={() => props.setModal(false)}
          > <AiOutlineClose/>close </button>
        <div className="wrapper">
          <div className="uk-modal-body">
            <h2>Add</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
            <div className="uk-grid uk-child-width-1-2@s">
              <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>Instruction Id</span>
                </label>
                <div className="uk-position-relative">
                  <input className="uk-input" type="text" placeholder="Value" name="id"/>
                </div>
              </div>
             
              <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>Subject</span>
                </label>
                <div className="uk-position-relative">
                  <input
                    className="uk-input"
                    placeholder="Subject name"
                    type="text"
                    name="subject"  
                    id='subject'
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                  />
              </div>
            </div>
            </div>
            
            <div className="uk-grid uk-child-width-1-2@s">
            <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>Start Date</span>
                </label>
                <div className="uk-position-relative">
                  <input
                    className="uk-input"
                    placeholder="Subject name"
                    type="Date"
                    name="startDate"  
                    id='startDate'
                    onChange={formik.handleChange}
                    value={formik.values.startDate}
                  />
              </div>
            </div>
             
              <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>Start Time</span>
                </label>
                <div className="uk-position-relative">
                  <input
                    className="uk-input"
                    placeholder="Subject name"
                    type="time"
                    name="startTime"  
                    id='startTime'
                    onChange={formik.handleChange}
                    value={formik.values.startTime}
                  />
              </div>
            </div>
            </div>
            
            <div className="uk-grid uk-child-width-1-2@s">
            <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>End Date</span>
                </label>
                <div className="uk-position-relative">
                  <input
                    className="uk-input"
                    placeholder="Subject name"
                    type="Date"
                    name="endDate"  
                    id='endDate'
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                  />
              </div>
            </div>
             
              <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>End Time</span>
                </label>
                <div className="uk-position-relative">
                  <input
                    className="uk-input"
                    placeholder="Subject name"
                    type="time"
                    name="endTime"  
                    id='endTime'
                    onChange={formik.handleChange}
                    value={formik.values.endTime}
                  />
              </div>
            </div>
            </div>
            <div className="uk-grid uk-child-width-1-2@s">
            <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>Status</span>
                </label>
                <div className="uk-position-relative uk-field-with-icon">
                        <select name="startTime" className="uk-select"> 
                        <option>Complete</option>
                        <option>Pending</option>
                        <option>Issus</option>
                        </select> 
                      </div>
            </div>
             
            <div className="form-control mb-24">
                <label className="uk-custom-label">
                  <span>Action</span>
                </label>
                <div className="uk-position-relative uk-field-with-icon">
                        <select name="startTime" className="uk-select"> 
                        <option>Viewed</option>
                        <option>Not Viewed</option>
                        </select> 
                      </div>
            </div>
             
            </div>

              <div className="uk-flex uk-flex-right mb-20">
              <button className="Add-button uk-button uk-button-primary ml-10 uk-border-pill">
                Submit
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      
  )
}

export default PopupFromItem
