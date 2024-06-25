import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import './_devicesListItem.scss';

function DevicesListItem({ device }) {
  const devicesList = useSelector((store) => store.devicesReducer.deviceItems);

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 80,
      editable: true,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 80,
      editable: true,
    },
    {
      field: 'model_number',
      headerName: 'Model',
      width: 100,
      editable: true,
    },
    {
      field: 'serial_number',
      headerName: 'Serial #',
      width: 110,
      editable: true,
    },
    {
      field: 'maintenance_date',
      headerName: 'Maint Date',
      width: 115,
      editable: true,
    },
    {
      field: 'maintenance_due',
      headerName: 'Maint Due',
      width: 115,
      editable: true,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 115,
      editable: true,
    },
    {
      field: 'manufacture_date',
      headerName: 'Mfr Date',
      width: 115,
      editable: true,
    },
    {
      field: 'install_date',
      headerName: 'Install Date',
      width: 115,
      editable: true,
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
