import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './_trackingForm.scss';

export default function TrackingFormFridge() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

// standard form
//   const [maintenance_date, setMaintenance_date] = useState('');
//   const [maintenance_due, setMaintenance_due] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const device = {
//       device_type_id,
//       maintenance_date,
//       maintenance_due,
//       user_id: user.id,
//     };
//   };

  return (
    <>
      <form className="tracking-form column">

          <div className="text-s row text-m" style={{ fontWeight: 'bold' }}>
            Maintance Due - 
          </div>
          <div className="text-s row text-m" style={{ fontWeight: 'light' }}>
            <input
              type="text"
              // name="username"
              placeholder="Filter Last Changed/Cleaned 12/01/2023"
              className="row text-s"
              // value={username}
              // onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="text-s row text-m" style={{ fontWeight: 'light' }}>
            <input
              type="text"
              // name="username"
              placeholder="Due for Change/Clean on 2/01/2024 "
              className="row text-s"
              // value={username}
              // onChange={(event) => setUsername(event.target.value)}
            />
            
          </div>
          <div className="text-s row text-m" style={{ fontWeight: 'light' }}>
            <input
              type="text"
              // name="username"
              placeholder="Today or Date Changed/Cleaned."
              className="row text-s"
              // value={username}
              // onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="text-s row text-m">
          <p className="text-s">I just changed this:&nbsp;&nbsp;</p>
          <button
            type="button"
            className="btn btn_asLink text-s"
            onClick={() => {
              history.push('/');
            }}
          >
            Today
          </button>              
            <br/>          
          </div>
          <div className="header-five jc-center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
            <br/>
            Other Tips to do now -	
            <br/>
            1. Vacuum AC Coils 
            <br/>
            2. Inspect Water Line
          </div>
          <div className="row jc-center">
            <input
              className="btn-pill text-s"
              type="submit"
              value="Show Me 'How To' Video"
            />
         </div>
         <div className="row jc-center">
          <p className="text-s">View all registered &nbsp;&nbsp;</p>
          <button
            type="button"
            className="btn btn_asLink text-s"
            onClick={() => {
              history.push('/devices');
            }}
          >
            Devices
          </button>
        </div>
          <div className="row jc-space-between">
            <button
              className="btn"
              onClick={() => {
                history.push('/refrigerator-intake');
              }}
            >
              Back
            </button>
            <button
              className="btn"
              type="submit"
              onClick={() => {
                history.push('/initial-intake');
              }}
            >
              Next Intake
            </button>
          </div>
      </form>
    </>
  );
}