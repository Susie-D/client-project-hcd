import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import './_devicesListItem.scss';
import { useHistory } from 'react-router-dom';

function DevicesListItem() {
  //  ALL devices for a single user
  const devicesList = useSelector((store) => store.devicesReducer.deviceItems);

  const history = useHistory();

  function handleDeviceListItemClick(device) {
    console.log('THIS IS WHAT IM LOOKING FOR', device);
    history.push(`/device-profile/${device.id}`);
  }

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 80,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 80,
    },
    {
      field: 'model_number',
      headerName: 'Model',
      width: 100,
    },
    {
      field: 'serial_number',
      headerName: 'Serial #',
      width: 110,
    },
    {
      field: 'maintenance_date',
      headerName: 'Maint Date',
      width: 115,
    },
    {
      field: 'maintenance_due',
      headerName: 'Maint Due',
      width: 115,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 115,
    },
    {
      field: 'manufacture_date',
      headerName: 'Mfr Date',
      width: 115,
    },
    {
      field: 'install_date',
      headerName: 'Install Date',
      width: 115,
    },
  ];

  return (
    <>
      {devicesList ? (
        <DataGrid
          rows={devicesList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          enableRowSelectionOnClick
          variant="scrollable"
          onRowClick={handleDeviceListItemClick}
        />
      ) : (
        <div className="device-message header-four">
          You currently have no devices, please start the device intake to add
          your home devices.
        </div>
      )}
    </>
  );
}

export default DevicesListItem;
