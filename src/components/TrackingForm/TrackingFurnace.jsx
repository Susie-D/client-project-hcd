import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function IntakeFormFurnace() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // standard form
  const [maintenance_date, setMaintenance_date] = useState('');
  const [maintenance_due, setMaintenance_due] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const device = {
      device_type_id,
      maintenance_date,
      maintenance_due,
      user_id: user.id,
    };

    dispatch({
      type: 'ADD_DEVICE',
      payload: {
        device: device,
      },
    });
    history.push('/devices'); // Navigate to the next page if needed
  };

  return (
    <>
      <form className="intake-form column">

          <div className="text-s row text-m" style={{ fontWeight: 'bold' }}>
            Maintance Due
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
              onClick={(event) => handleSubmit(event)}
            >
              Submit
            </button>
          </div>
      </form>
    </>
  );
}