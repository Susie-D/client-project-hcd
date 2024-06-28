import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function IntakeFormFurnace() {
  const history = useHistory();
  const dispatch = useDispatch();
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
      <form className="intake-form column">

          <div className="text-s row text-m" style={{ fontWeight: 'bold' }}>
            Maintance Due - 
          </div>
          <div className="text-s row text-m" style={{ fontWeight: 'light' }}>
            Filter Last Changed/Cleaned 12/01/2023 
          </div>
          <div className="text-s row text-m" style={{ fontWeight: 'light' }}>
            Due for Change/Clean on 2/01/2024 
          </div>
          <div className="text-s row text-m" style={{ fontWeight: 'light' }}>
            Preformed Today or Date you changed/cleaned. 
          </div>
          <div className="text-s row text-m" style={{ fontWeight: 'light' }}>
            I just changed this: Today or Click here to select a date you preformed this task. 
          </div>
          <div className="header-five jc-center" style={{ fontWeight: 'bold' }}>
            HC Note - HEPA changes can be as short as 3 months or as long as 6 months.
            HouseCheckup has picked every 4 months as a reminder and task to preform.
            Other Tips to do now -	
            1. Vacuum Exterior Unit 
            2. Clean Interior of the Unit 
            3. Inspect condensate pumps (if any)
          </div>
          <div className="row jc-center">
            <input
              className="btn-pill text-s"
              type="submit"
              value="Show Me 'How To' Video"
            />
         </div>
          <div className="row jc-space-between">
            <button
              className="btn"
              onClick={() => {
                history.push('/furnace-intake');
              }}
            >
              Back
            </button>
            <button
              className="btn"
              type="submit"
              onClick={() => {
                history.push('/devices');
              }}
            >
              Next Intake
            </button>
          </div>
      </form>
    </>
  );
}