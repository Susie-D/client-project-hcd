import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DevicesListItem from '../DevicesListItem/DevicesListItem';

function DevicesList() {
    const dispatch = useDispatch();
    const devicesList = useSelector(store => store.devicesReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_DEVICES' });
    }, [dispatch]);

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
                <tbody>
                    {devicesList.map(device => (
                        <DevicesListItem key={device.id} device={device} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DevicesList;
