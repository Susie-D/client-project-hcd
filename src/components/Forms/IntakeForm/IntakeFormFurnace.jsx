import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './_intakeForm.scss';

export default function IntakeFormFurnace() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // standard form
  const [brand, setBrand] = useState('');
  const [model_number, setModel_number] = useState('');
  const [serial_number, setSerial_number] = useState('');
  const [location, setLocation] = useState('');
  const [manufacture_date, setManufacture_date] = useState('');
  const [install_date, setInstall_date] = useState('');
  const [device_type_id, setDevice_type_id] = useState(2);

  // additional info
  const [filterType, setFilterType] = useState('');
  const [filterSize, setFilterSize] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterModelNumber, setFilterModelNumber] = useState('');
  const [mervRating, setMervRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const device = {
      device_type_id,
      brand,
      model_number,
      serial_number,
      location,
      manufacture_date,
      install_date,
      user_id: user.id,
      additional_info: [
        {
          property_id: 4,
          prop_value: filterType,
        },
        {
          property_id: 5,
          prop_value: filterSize,
        },
        {
          property_id: 6,
          prop_value: filterBrand,
        },
        {
          property_id: 7,
          prop_value: filterModelNumber,
        },
        {
          property_id: 8,
          prop_value: mervRating,
        },
      ],
    };

    dispatch({
      type: 'ADD_DEVICE',
      payload: {
        device: device,
      },
    });
    history.push('/furnace-tracking');
  };

  return (
    <form className="intake-form column">
      <div className="column">
        <input
          type="text"
          name="location"
          placeholder="Location on Premise - i.e. Living Room, Bed #2"
          className="row text-xs"
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
          className="row text-xs"
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
          className="row text-xs"
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
          className="row text-xs"
          value={serial_number}
          required
          onChange={(event) => setSerial_number(event.target.value)}
        />
      </div>
      <div className="column text-xs">
        Manufacture Date
        <input
          type="date"
          name="manufacture_date"
          placeholder="Manufacture Date"
          className="row jc-center text-xs"
          value={manufacture_date}
          required
          onChange={(event) => setManufacture_date(event.target.value)}
        />
      </div>
      <div className="column text-xs">
        Installation Date
        <input
          type="date"
          name="install_date"
          placeholder="Date installed"
          className="row jc-center text-xs"
          value={install_date}
          required
          onChange={(event) => setInstall_date(event.target.value)}
        />
        <div
          className="text-s jc-center row text-m dark"
          style={{ fontWeight: 'bold' }}
        >
          Additional Device Info
        </div>
        <input
          type="text"
          name="filterType"
          placeholder="Filter Type"
          className="row text-xs"
          value={filterType}
          required
          onChange={(event) => setFilterType(event.target.value)}
        />
        <input
          type="text"
          name="filterSize"
          placeholder="Filter Size"
          className="row text-xs"
          value={filterSize}
          required
          onChange={(event) => setFilterSize(event.target.value)}
        />
        <input
          type="text"
          name="filterBrand"
          placeholder="Filter Brand"
          className="row text-xs"
          value={filterBrand}
          required
          onChange={(event) => setFilterBrand(event.target.value)}
        />
        <input
          type="text"
          name="filterModelNumber"
          placeholder="Filter Model Number"
          className="row text-xs"
          value={filterModelNumber}
          required
          onChange={(event) => setFilterModelNumber(event.target.value)}
        />
        <input
          type="text"
          name="mervRating"
          placeholder="Merv Rating"
          className="row text-xs"
          value={mervRating}
          required
          onChange={(event) => setMervRating(event.target.value)}
        />
        <div className="row jc-space-between">
          <button
            className="btn btn_sizeMin one text-xxs"
            onClick={() => {
              history.push('/initial-intake');
            }}
          >
            Back
          </button>
          <button
            className="btn btn_sizeMin two text-xxs"
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
