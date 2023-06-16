import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {CiEdit} from 'react-icons/ci'


const WorkReport = () => {
  
    const [startDate, setStartDate] = useState<any>(new Date());
   
  return (
    <section>
        <div className='work_report' style={{marginTop:"80px"}}>
   <div className="uk-flex uk-flex-between uk-flex-middle mb-24">
     <div className="uk-flex">
     <h3 className="uk-text-capitalize">WORK-REPORT</h3>   
     </div>
     <button className="uk-button uk-border-rounded uk-button-primary " >
       ADD
     </button>
   </div>
        <div className='uk-report'>
            <div className="uk-card uk-flex uk-container " style={{width:"100%", height:"20vh"}}>
            <div className="form-control">
                <label className="uk-custom-label">
                  <span>Project</span>
                </label>
                <div className="uk-position-relative uk-field-with-icon">
                        <select name="startTime" className="uk-select"> 
                        <option>Project 1</option>
                        <option>Project 3</option>
                        <option>Project 5</option>
                        <option>Project 4s</option>
                        <option>Project 2</option>
                        </select> 
                      </div>
            </div>
                <div className=''>
                <label className="uk-custom-label" htmlFor="Start date">
                <span>Start Date</span>
                    </label>
               <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='uk-input'/>
                </div>
                <div className=''>
                    <label className="uk-custom-label" htmlFor="End Date">End Date</label>
                   <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='uk-input'/>
                </div>
                <div className='search-button'>
                    <a href="##" className='uk-button uk-border-pill uk-button-primary' type='submit' >Search</a>
                </div>
            </div>
        </div>
        </div>
        <div className='work_report_table'>
            <div className='uk-card  p-5'>
            <div className="uk-overflow-auto mb-24">
         <table className="uk-table uk-table-divider uk-table-middle min-w-1400">
           <thead>
             <tr>
               <th className="w-78"></th>
               <th className="w-52">No</th>
               <th>User Type</th>
               <th>User-Id</th>
               <th>User-Name</th>
               <th>Phone Number</th>
               <th>Password</th>
               <th>Status</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td></td>
               <td>1</td>
               <td>Admin</td>
               <td>Test1</td>
               <td>Test</td>
               <td>0123456789</td>
               <td>@#123#</td>
               <td>active</td>
               <td className="uk-text-center">
                 <a href="##" className="color-blue-70"
                    ><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>1</td>
               <td>Admin</td>
               <td>Test1</td>
               <td>Test</td>
               <td>0123456789</td>
               <td>@#123#</td>
               <td>active</td>
               <td className="uk-text-center">
                 <a href="##" className="color-blue-70"
                    ><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>1</td>
               <td>Admin</td>
               <td>Test1</td>
               <td>Test</td>
               <td>0123456789</td>
               <td>@#123#</td>
               <td>active</td>
               <td className="uk-text-center">
                 <a href="##" className="color-blue-70"
                    ><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>1</td>
               <td>Admin</td>
               <td>Test1</td>
               <td>Test</td>
               <td>0123456789</td>
               <td>@#123#</td>
               <td>active</td>
               <td className="uk-text-center">
                 <a href="##" className="color-blue-70"
                    ><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>1</td>
               <td>Admin</td>
               <td>Test1</td>
               <td>Test</td>
               <td>0123456789</td>
               <td>@#123#</td>
               <td>active</td>
               <td className="uk-text-center">
                 <a href="##" className="color-blue-70"
                    ><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
           </tbody>
         </table>
       </div>
            </div>
            </div>
    </section>
    
  )
}

export default WorkReport


