import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function IntakeFormFridge (){
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
  const [device_type_id, setDevice_type_id] = useState(1);

  // additional info
   const [waterFilterModelNumber, setwaterFilterModelNumber] = useState('');
   const [airFilterModelNumber, setairFilterModelNumber] = useState('');
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
                property_id: 1, //should come from form
                prop_value: 
                    waterFilterModelNumber,
              },
              {
                property_id: 2,
                prop_value: 
                    airFilterModelNumber,
              },
              {
                property_id: 3,
                prop_value: 
                  mervRating,
              },
        ],
     };
 
     dispatch({
       type: 'ADD_DEVICE',
       payload: {
         device: device,
       },
     });
    history.push('/Refrigerator-tracking'); // Navigate to the next page
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

        <div className="column">
            <input
            type="text"
            name="waterFilterModelNumber"
            placeholder="Water Filter Model Number"
            className="row text-m"
            value={waterFilterModelNumber}
            required
            onChange={(event) => setwaterFilterModelNumber(event.target.value)}
            />
        </div>
        <div className="column">
            <input
            type="text"
            name="airFilterModelNumber"
            placeholder="Air Filter Model Number"
            className="row text-m"
            value={airFilterModelNumber}
            required
            onChange={(event) => setairFilterModelNumber(event.target.value)}
            />
        </div>
        <div className="column">
            <input
            type="text"
            name="mervRating"
            placeholder="Merv Rating Desired"
            className="row text-m"
            value={mervRating}
            required
            onChange={(event) => setMervRating(event.target.value)}
            />
        </div>
            <div className="row jc-space-between">
            <button
                className="btn"
                onClick={() => {
                history.push('/initial-intake');
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

export default IntakeFormFridge;