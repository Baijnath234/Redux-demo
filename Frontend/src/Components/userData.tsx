import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";

const UserData = () => {
  const [showTable1, setShowTable1] = useState(true);
  const [buttonName, setButtonName] = useState("User");

  const toggleTables = () => {
    setShowTable1(!showTable1);
    setButtonName(showTable1 ? "Admin" : "User");
  };

  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>("");

  const handleNoteChange = (event: any) => {
    setNewNote(event.target.value);
  };

  const handleNoteSave = () => {
    setNotes([...notes, newNote]);
    setNewNote("");
  };

  return (
    <section className="table" style={{marginTop:"80px"}}>
      <div className="uk-main-title uk-flex uk-flex-between uk-flex-middle mb-24">
        <h3 className="uk-text-capitalize">USER-TABLE</h3>
        <button className="uk-button" onClick={toggleTables}>
          {buttonName}
        </button>
      </div>
      <div className="uk-flex uk-flex-between uk-flex-middle mb-24">
        <div className="uk-flex uk-flex-middle">
          <span className="font-18 uk-text-medium color-white mr-10">
            Records
          </span>
          <div className="uk-badge uk-badge-cases font-14">0</div>
        </div>
        <button className="uk-button uk-border-pill uk-button-primary">
          <i className="jera-add-circle icn-20"></i>View All
        </button>
      </div>
      {showTable1 ? (
        <div className="uk-overflow-auto mb-24">
          <table className="uk-table uk-table-divider uk-table-middle min-w-1400">
            <thead>
              <tr>
                <th className="w-78"></th>
                <th className="w-52">No</th>
                <th>TYPE</th>
                <th>USER-Id</th>
                <th>USER-Name</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>1</td>
                <td>USER</td>
                <td>U-123</td>
                <td>Rahul</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>Active</td>
                <td className="uk-text-center">
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>2</td>
                <td>USER</td>
                <td>U-321</td>
                <td>Abhishek</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>Active</td>
                <td className="uk-text-center">
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>3</td>
                <td>USER</td>
                <td>Test1</td>
                <td>Test</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>active</td>
                <td className="uk-text-center">
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>4</td>
                <td>USER</td>
                <td>Test1</td>
                <td>Test</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>active</td>
                <td className="uk-text-center">
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>5</td>
                <td>USER</td>
                <td>Test1</td>
                <td>Test</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>active</td>
                <td className="uk-text-center">
                  <a href="#@#" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="uk-overflow-auto mb-24">
          <table className="uk-table uk-table-divider uk-table-middle min-w-1400">
            <thead>
              <tr>
                <th className="w-78"></th>
                <th className="w-52">No</th>
                <th>TYPE</th>
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
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>2</td>
                <td>Admin</td>
                <td>Test1</td>
                <td>Test</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>active</td>
                <td className="uk-text-center">
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>3</td>
                <td>Admin</td>
                <td>Test1</td>
                <td>Test</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>active</td>
                <td className="uk-text-center">
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>4</td>
                <td>Admin</td>
                <td>Test1</td>
                <td>Test</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>active</td>
                <td className="uk-text-center">
                  <a href="##" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>5</td>
                <td>Admin</td>
                <td>Test1</td>
                <td>Test</td>
                <td>0123456789</td>
                <td>@#123#</td>
                <td>active</td>
                <td className="uk-text-center">
                  <a href="#@#" className="color-blue-70">
                    <i className="uk-icons uk-icon-default">
                      <CiEdit />
                    </i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <ul className="uk-pagination uk-flex-center " uk-margin>
        <li>
          <a href="##">
            <span uk-pagination-previous></span>
          </a>
        </li>
        <li>
          <a href="###">4</a>
        </li>
        <li>
          <a href="##">5</a>
        </li>
        <li>
          <a href="##">6</a>
        </li>
        <li className="uk-active">
          <span>7</span>
        </li>
        <li>
          <a href="##">8</a>
        </li>
        <li>
          <a href="##">9</a>
        </li>
        <li>
          <a href="##">10</a>
        </li>
        <li className="uk-disabled">
          <span>…</span>
        </li>
        <li>
          <a href="##">20</a>
        </li>
        <li>
          <a href="##">
            <span uk-pagination-next></span>
          </a>
        </li>
      </ul>
      <hr />
      <div>
        <h1 className="uk-text-center">My Notebook</h1>
        <textarea
          value={newNote}
          onChange={handleNoteChange}
          style={{ width: "100%", height: "30vh" }}
        />
        <button onClick={handleNoteSave}>Save Note</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UserData;

// const [number, setNumber] = useState(0);
// return (
//   <div>
//      <div className='uk-flex  uk-container'>

//        <button className='uk-button uk-button-primary' onClick={() => {
//          setNumber(number + 5);
//          alert(number);
//        }}>+5</button>
//         <h1>{number}</h1>
//        <button className='uk-button uk-button-primary' onClick={() => {
//          setNumber(number - 5);
//          alert(number);
//        }}>-5</button>
//            </div>
//   </div>
// )
