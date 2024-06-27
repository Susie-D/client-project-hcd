import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//! useEffect --> get item by id

function DevicesListItem({device}) {

    const history = useHistory();


    function handleDeviceListItemClick(device){
        console.log('THIS IS WHAT IM LOOKING FOR', device);
        history.push(`/device-profile/${device.id}`);
      }


    return (
        <tr onClick={() => handleDeviceListItemClick(device)}>
            {/* {JSON.stringify(device)} */}
            <td>{device.brand}</td>
            <td>{device.model}</td>
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


