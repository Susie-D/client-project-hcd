import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DevicesListItem } from '../../components/components';
import { PageLayout } from '../pages';
import Box from '@mui/material/Box';
import './_devicesList.scss';

function DevicesList() {
  //const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_DEVICES_BY_USER_ID' });
  }, [dispatch]);

  return (
    <div className="device-list-container">
      <PageLayout>
        <div className="header-three jc-center">Devices List</div>
        <div className="jc-center">
          <Box
            sx={{
              height: '100%',
              width: '78%',
              marginTop: '2em',
              fontSize: '8px',
            }}
          >
            <DevicesListItem />
          </Box>
        </div>
      </PageLayout>
    </div>
  );
}

export default DevicesList;
