import React, { useEffect } from 'react';
import { useHistory, useDispatch, useSelector } from 'react-router-dom/cjs/react-router-dom.min';
import './DeviceProfile.scss';
import '../../styles/_styles.scss';


function DeviceProfile() {
 
    const history = useHistory();


    



    return (
        <>
            <div className="row jc-center">
                <h1>Device Profile</h1>
            </div>
            <table className="row jc-center">
                <tbody>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <th>Serial Number</th>
                        <th>Maintenance Date</th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td className='row jc-center'>D.A.T.A</td>
                    </tr>
                    <tr>
                        <th>Maintenance Due</th>
                        <th>Location</th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <th>Manufacture Date</th>
                        <th>Install Date</th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <button className='btn'onClick={() => {
                    history.push('/devices');
                    }}>Back</button>
                    <button className="btn" onClick={() => {
                    history.push('/device-how-to-videos');
                    }}>How to Videos</button>
                </tbody>
            </table>
        </>
    );
}

export default DeviceProfile;
