import React from 'react';
import { useHistory } from 'react-router-dom';

//! useEffect --> get item by id

function DevicesListItem({ device }) {
  const history = useHistory();

  function handleDeviceListItemClick(device) {
    history.push(`/device-profile/${device.id}`);
  }

  return (
    <tr onClick={() => handleDeviceListItemClick(device)}>
      <td>{device.brand}</td>
      <td>{device.model_number}</td>
      <td>{device.serial_number}</td>
      <td>{device.maintenance_date}</td>
      <td>{device.maintenance_due}</td>
      <td>{device.location}</td>
      <td>{device.manufacture_date}</td>
      <td>{device.install_date}</td>
    </tr>
  );
}

export default DevicesListItem;
