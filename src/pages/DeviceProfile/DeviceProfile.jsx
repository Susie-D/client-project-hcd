import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './DeviceProfile.scss';
import '../../styles/_styles.scss';

function DeviceProfile() {
  const dispatch = useDispatch();
  const { deviceId } = useParams();
  const history = useHistory();

  const deviceById = useSelector((store) => store.devicesReducer.deviceProfile);

  useEffect(() => {
    dispatch({ type: 'FETCH_DEVICES_BY_DEVICES_ID', payload: deviceId });
  }, [dispatch, deviceId]);

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
            <td>{deviceById.brand}</td>
            <td>{deviceById.model_number}</td>
          </tr>
          <tr>
            <th>Serial Number</th>
            <th>Maintenance Date</th>
          </tr>
          <tr>
            <td>{deviceById.serial_number}</td>
            <td className="row jc-center">{deviceById.maintenance_date}</td>
          </tr>
          <tr>
            <th>Maintenance Due</th>
            <th>Location</th>
          </tr>
          <tr>
            <td>{deviceById.maintenance_due}</td>
            <td>{deviceById.location}</td>
          </tr>
          <tr>
            <th>Manufacture Date</th>
            <th>Install Date</th>
          </tr>
          <tr>
            <td>{deviceById.manufacture_date}</td>
            <td>{deviceById.install_date}</td>
          </tr>

          {/* <button className='btn'onClick={() => {
                    history.push('/devices');
                    }}>Back</button>
                    <button className="btn" onClick={() => {
                    history.push('/device-how-to-videos');
                    }}>How to Videos</button>
                    */}
        </tbody>
      </table>
      <button
        className="btn"
        onClick={() => {
          history.push('/devices');
        }}
      >
        Back
      </button>
      <button
        className="btn"
        onClick={() => {
          history.push('/device-how-to-videos');
        }}
      >
        How to Videos
      </button>
    </>
  );
}

export default DeviceProfile;
