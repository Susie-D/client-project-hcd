import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './_trackingForm.scss';

export default function IntakeFormFurnace() {
  const history = useHistory();
  const deviceToAdd = useSelector((store) => store.devicesReducer.deviceToAdd);

  const [maintenance_date, setMaintenance_date] = useState('');
  const [maintenance_due, setMaintenance_due] = useState('');
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const device = {
      device_type_id,
      maintenance_date,
      maintenance_due,
    };
  };

  return (
    <>
      <form className="tracking-form column">
        {console.log('heeeeeeeello', deviceToAdd)}
        {/* <div className="text-s row text-m" style={{ fontWeight: 'bold' }}>
          Maintenance Due
        </div> */}
        <div className="text-s row text-m" style={{ color: 'grey' }}>
          Filter Last Changed / Cleaned: 12/01/2023
          {/* <input
            type="text"
            // name="username"
            placeholder="Filter Last Changed: 12/01/2023"
            className="row text-s"
            // value={username}
            // onChange={(event) => setUsername(event.target.value)}
          /> */}
        </div>
        <br />
        <div className="text-s column text-s">
          <p
            className="text-s"
            style={{ color: 'deeppink', marginBottom: '0.75em' }}
          >
            Maintenance Due for Change: 2/01/2024
          </p>
          <div className="text-xxs">Update Maintenance Due Date</div>
          <input
            type="date"
            name="maintenance_due"
            placeholder="Due for Change: 2/01/2024"
            className="row text-s"
            value={maintenance_due}
            onChange={(event) => setMaintenance_due(event.target.value)}
          />
        </div>
        <div className="text-s column text-s" style={{ fontWeight: 'light' }}>
          <div className="text-xxs">Today or Date Changed / Cleaned</div>
          <input
            type="date"
            name="maintenance_date"
            placeholder="Today or Date Changed / Cleaned"
            className="row text-s"
            value={maintenance_date}
            onChange={(event) => setMaintenance_date(event.target.value)}
          />
        </div>
        <div className="text-s text-m jc-center">
          <p className="text-s">I just changed this:&nbsp;&nbsp;</p>
          <button
            type="button"
            className="btn btn_asLink text-s"
            onClick={() => {
              setMaintenance_date(new Date().toJSON().slice(0, 10));
            }}
          >
            Today
          </button>
        </div>
        <div
          className="header-five jc-center column"
          style={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          <div className="row">
            <span className="text-s">
              HC Note: HEPA changes can be as short as 3 months or as long as 6
              months. House Checkup has picked every 4 months as a reminder and
              task to preform.
            </span>
          </div>
          <br />
          <div className="column jc-center">
            <span className="text-s">
              Other Tips to do now -<p>1. Vacuum Exterior Unit</p>
              <p>2. Clean Interior of the Unit</p>
              <p>3. Inspect condensate pumps (if any)</p>
            </span>
          </div>
        </div>
        <div className="row jc-center">
          <input
            className="btn-pill text-s"
            type="submit"
            value={`Show Me "How To" Videos`}
            onClick={() => history.push('/device-how-to-videos/furnace')}
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
            className="btn btn_sizeMin one text-xxs"
            onClick={() => {
              history.push('/furnace-intake');
            }}
          >
            Back
          </button>
          <button
            className="btn btn_sizeMin two text-xxs"
            type="submit"
            onClick={() => {
              history.push('/devices');
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
