import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { PageLayout } from '../../pages/pages';

import './_deviceProfile.scss';
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
      <PageLayout>
        <div className="device-profile-container column jc-center">
          <div className="header-two jc-center">Device Profile</div>
          <div className="column ac-center">
            <img src={deviceById.img_url} />

            <div className="row">
              <div className="device-profile-content-row">
                <p className="bold">Brand</p>
                <p>{deviceById.brand}</p>
              </div>
              <div className="device-profile-content-row">
                <p className="bold">Model</p>
                <p>{deviceById.model_number}</p>
              </div>
              <div className="device-profile-content-row">
                <p className="bold">Serial Number</p>
                <p>{deviceById.serial_number}</p>
              </div>
            </div>

            <div className="row">
              <div className="device-profile-content-row">
                <p className="bold">MAINT Date</p>
                <p>{deviceById.maintenance_date}</p>
              </div>
              <div className="device-profile-content-row">
                <p className="bold">MAINT Due</p>
                <p>{deviceById.maintenance_due}</p>
              </div>
              <div className="device-profile-content-row">
                <p className="bold">Location</p>
                <p>{deviceById.location}</p>
              </div>
            </div>

            <div className="row">
              <div className="device-profile-content-row">
                <p className="bold">MFG Date</p>
                <p>{deviceById.manufacture_date}</p>
              </div>
              <div className="device-profile-content-row">
                <p className="bold">Install Date</p>
                <p>{deviceById.install_date}</p>
              </div>
            </div>
          </div>
          <div className="row jc-center">
            <button
              className="btn_sizeMin back text-xxs"
              onClick={() => {
                history.push('/devices');
              }}
            >
              Back
            </button>
            <button
              className="btn_sizeMin videos text-xxs"
              onClick={() => {
                history.push('/device-how-to-videos');
              }}
            >
              How to Videos
            </button>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default DeviceProfile;
