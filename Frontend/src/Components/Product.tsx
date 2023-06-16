import React from 'react'
import {CiEdit} from 'react-icons/ci'


const Product = (props:any) => {
  return (
    <div >
    <div className="uk-main-title"
    style={{marginTop:"80px"}}>
     <h3 className="uk-text-capitalize">ADD PRODUCT TABLE</h3>
   </div>
   <div className="uk-flex uk-flex-between uk-flex-middle mb-24">
     <div className="uk-flex uk-flex-middle">
       <span className="font-18 uk-text-medium color-white mr-10">
         Records
       </span>
       <div className="uk-badge uk-badge-cases font-14">
         0
       </div>
     </div>
     <button className="uk-button uk-border-pill uk-button-primary" 
     onClick={() => props.setModal(true)}>
       <i className="jera-add-circle icn-20"></i>Add
     </button>
   </div>
   <div className="uk-overflow-auto mb-24">
         <table className="uk-table uk-table-divider uk-table-middle min-w-1400">
           <thead>
             <tr>
               <th className="w-78"></th>
               <th className="w-52">No</th>
               <th>Subject</th>
               <th>Start-Date</th>
               <th>Start-Time</th>
               <th>End-Date</th>
               <th>End-Time</th>
               <th>Status</th>
               <th>Action</th>
               <th>Edit</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td></td>
               <td>1</td>
               <td>Test</td>
               <td>2023-03-28</td>
               <td>17:55:30</td>
               <td>2023-03-29</td>
               <td>17:55:30</td>
               <td>Completed</td>
               <td>Not Read</td>
               <td className="uk-text-center">
                 <a href="#" className="color-blue-70"
                    onClick={() => props.setModal(true)}><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>2</td>
               <td>Test</td>
               <td>2023-03-28</td>
               <td>17:55:30</td>
               <td>2023-03-29</td>
               <td>17:55:30</td>
               <td>Completed</td>
               <td>Not Read</td>
               <td className="uk-text-center">
                 <a href="#" className="color-blue-70"
                    onClick={() => props.setModal(true)}><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>3</td>
               <td>Test</td>
               <td>2023-03-28</td>
               <td>17:55:30</td>
               <td>2023-03-29</td>
               <td>17:55:30</td>
               <td>Completed</td>
               <td>Not Read</td>
               <td className="uk-text-center">
                 <a href="#" className="color-blue-70"
                    onClick={() => props.setModal(true)}><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>4</td>
               <td>Test</td>
               <td>2023-03-28</td>
               <td>17:55:30</td>
               <td>2023-03-29</td>
               <td>17:55:30</td>
               <td>Completed</td>
               <td>Not Read</td>
               <td className="uk-text-center">
                 <a href="#" className="color-blue-70"
                    onClick={() => props.setModal(true)}><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
             <tr>
               <td></td>
               <td>5</td>
               <td>Test</td>
               <td>2023-03-28</td>
               <td>17:55:30</td>
               <td>2023-03-29</td>
               <td>17:55:30</td>
               <td>Completed</td>
               <td>Not Read</td>
               <td className="uk-text-center">
                 <a href="#" className="color-blue-70"
                    onClick={() => props.setModal(true)}><i className="uk-icons uk-icon-default"><CiEdit/></i>
                 </a>
               </td>
             </tr>
           </tbody>
         </table>
       </div>
       <ul className="uk-pagination uk-flex-center " uk-margin>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li className="uk-disabled"><span>…</span></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li className="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="#">10</a></li>
    <li className="uk-disabled"><span>…</span></li>
    <li><a href="#">20</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>
 </div>
  )
}

export default Product
