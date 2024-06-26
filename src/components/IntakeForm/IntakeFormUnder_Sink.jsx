import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function IntakeFormUnder_Sink (){
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
    const [device_type_id, setDevice_type_id] = useState(3);
  
    // additional info
    const [filterSize, setFilterSize] = useState('');
    const [filterModelNumber, setFilterModelNumber] = useState('');
  
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
            property_id: 9, //should come from form
            prop_value: 
              filterSize, 
          },
          {
            property_id: 10,
            prop_value: 
              filterModelNumber,
          },
        ],
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
  
            <div className="text-s row text-m" style={{ fontWeight: 'bold' }}>
              Additional Device Info
            </div>
  
            <input
              type="text"
              name="filterSize"
              placeholder="Filter Size"
              className="row text-m"
              value={filterSize}
              required
              onChange={(event) => setFilterSize(event.target.value)}
            />
            <input
              type="text"
              name="filterModelNumber"
              placeholder="Filter Model Number"
              className="row text-m"
              value={filterModelNumber}
              required
              onChange={(event) => setFilterModelNumber(event.target.value)}
            />
            <div className="row jc-space-between">
              <button
                className="btn"
                onClick={() => {
                  history.push('/home');
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
          </div>
        </form>
      </>
    );
}''