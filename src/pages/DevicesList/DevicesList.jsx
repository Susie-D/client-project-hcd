import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DevicesListItem from '../DevicesListItem/DevicesListItem';

function DevicesList() {
  const dispatch = useDispatch();
  const devicesList = useSelector((store) => store.devicesReducer.deviceItems);

  useEffect(() => {
    dispatch({ type: 'FETCH_DEVICES_BY_USER_ID' });
  }, [dispatch]);


  function handleDeviceListItemClick(){
    
  }

  return (
    <div className="container">
      <div>
        <h1>Devices List 😄</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Serial Number</th>
            <th>Maintenance Date</th>
            <th>Maintenance Due</th>
            <th>Location</th>
            <th>Manufacture Date</th>
            <th>Install Date</th>
          </tr>
        </thead>
        {devicesList.map((device) => (
          <tbody>
            <DevicesListItem key={device.id} device={device} onClick={() => handleDeviceListItemClick(movie.id)}/>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default DevicesList;
