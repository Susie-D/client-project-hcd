import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './_intakeForm.scss';

function IntakeFormBase() {
  // const dispatch = useDispatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Defining a local state to store the user's new crush
  const [brand, setBrand] = useState('');
  const [model_number, setModel_number] = useState('');
  const [serial_number, setSerial_number] = useState('');
  const [location, setLocation] = useState('');
  const [manufacture_date, setManufacture_date] = useState('');
  const [install_date, setInstall_date] = useState('');
  const [device_type, setDevice_type] = useState('1');

  const handleSubmit = (event) => {
    event.preventDefault();
    const device = {
      device_type,
      brand,
      model_number,
      serial_number,
      location,
      manufacture_date,
      install_date,
      user_id: user.id,
    };

    dispatch({
      type: 'ADD_DEVICE',
      payload: {
        device: device,
      },
    });
    //history.push('/mainIntake'); // Navigate to the next page if needed
  };

  return (
    <form className="intake-form column">
      <div className="column">
        <input
          type="text"
          name="location"
          placeholder="Location on Premise - i.e. Living Room, Bed #2"
          className="row text-m"
          value={location}
          required
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className="column">
        <input
          type="text"
          name="brand"
          placeholder="Brand Name"
          className="row text-m"
          value={brand}
          required
          onChange={(event) => setBrand(event.target.value)}
        />
      </div>
      <div className="column">
        <input
          type="text"
          name="model"
          placeholder="Model #"
          className="row text-m"
          value={model_number}
          required
          onChange={(event) => setModel_number(event.target.value)}
        />
      </div>
      <div className="column">
        <input
          type="text"
          name="serial"
          placeholder="Serial #"
          className="row text-m"
          value={serial_number}
          required
          onChange={(event) => setSerial_number(event.target.value)}
        />
      </div>
      <div className="column">
        <input
          type="text"
          name="manufacture_date"
          placeholder="Manufacture Date"
          className="row text-m"
          value={manufacture_date}
          required
          onChange={(event) => setManufacture_date(event.target.value)}
        />
      </div>
      <div className="column">
        <input
          type="text"
          name="install_date"
          placeholder="Date installed"
          className="row text-m"
          value={install_date}
          required
          onChange={(event) => setInstall_date(event.target.value)}
        />
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Submit (This one works/ in base form)
        </button>
      </div>
    </form>
  );
} 
('');

export default IntakeFormBase;
