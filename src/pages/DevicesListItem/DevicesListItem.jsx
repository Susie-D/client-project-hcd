import React from 'react';


//! useEffect --> get item by id

function DevicesListItem({device}) {
    return (
        <tr>
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


