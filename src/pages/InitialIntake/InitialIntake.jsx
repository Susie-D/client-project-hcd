import { useState } from 'react';
import { PageLayout } from '../pages';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { categories } from '../../data/categories';
import './_initialIntake.scss';
import '../../styles/_styles.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function InitialIntake() {
  const [deviceTypeName, setDeviceTypeName] = useState({});
  const [selectedDropdown, setSelectedDropdown] = useState(false);
  const intakeDevice = useSelector((store) => store.devicesReducer.deviceType);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDeviceTypeName({
      ...deviceTypeName,
      [name]: value,
    });
    if (value) {
      setSelectedDropdown(name);
      console.log('value', value);
      dispatch({
        type: 'FETCH_DEVICE_TYPE',
        payload: value,
      });
    } else {
      setSelectedDropdown('');
    }
  };

  const routeToMainIntake = () => {
    console.log('intake device', intakeDevice);
    history.push(`/${intakeDevice}`);
  };

  return (
    <PageLayout>
      <div className="initial-intake-container column ac-center">
        <div className="header-two dark">
          Please select a single device type:
        </div>
        <FormControl fullWidth style={{ marginTop: '10px' }}>
          <InputLabel
            style={{
              margin: '0 40%',
            }}
            id="select-label"
          >
            HVAC
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={deviceTypeName?.hvac || ''}
            name="hvac"
            onChange={(e) => handleChange(e)}
            style={{
              borderRadius: '10em',
              backgroundColor: '#a9d09e',
              color: ' #032e45',
              fontWeight: 'bold',
            }}
            disabled={selectedDropdown && selectedDropdown !== 'hvac'}
          >
            {categories[0].deviceType.map((c, i) => (
              <MenuItem
                style={{
                  color: c.name === 'Furnace' ? 'red' : 'black',
                }}
                key={c.name}
                value={c.name}
                label={c.name}
              >
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              margin: '0 33%',
            }}
            id="select-label"
          >
            Appliance
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={deviceTypeName?.appliance || ''}
            name="appliance"
            onChange={(e) => handleChange(e)}
            style={{
              borderRadius: '10em',
              backgroundColor: '#a9d09e',
              color: ' #032e45',
              fontWeight: 'bold',
            }}
            disabled={selectedDropdown && selectedDropdown !== 'appliance'}
          >
            {categories[1].deviceType.map((c, i) => (
              <MenuItem
                style={{
                  color: c.name === 'Refrigerator' ? 'red' : 'black',
                }}
                key={c.name}
                value={c.name}
              >
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              margin: '0 33%',
            }}
            id="select-label"
          >
            Plumbing
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={deviceTypeName?.plumbing || ''}
            name="plumbing"
            onChange={(e) => handleChange(e)}
            style={{
              borderRadius: '10em',
              backgroundColor: '#a9d09e',
              color: ' #032e45',
              fontWeight: 'bold',
            }}
            disabled={selectedDropdown && selectedDropdown !== 'plumbing'}
          >
            {categories[2].deviceType.map((c, i) => (
              <MenuItem
                style={{
                  color: c.name === 'Undersink Inspection' ? 'red' : 'black',
                }}
                key={c.name}
                value={c.name}
              >
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              margin: '0 38%',
            }}
            id="select-label"
          >
            Safety
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={deviceTypeName?.safety || ''}
            name="safety"
            onChange={(e) => handleChange(e)}
            style={{
              borderRadius: '10em',
              backgroundColor: '#a9d09e',
              color: ' #032e45',
              fontWeight: 'bold',
            }}
            disabled={selectedDropdown && selectedDropdown !== 'safety'}
          >
            {categories[3].deviceType.map((c, i) => (
              <MenuItem key={c.name} value={c.name}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              margin: '0 35%',
            }}
            id="select-label"
          >
            Structure
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={deviceTypeName?.structure || ''}
            name="structure"
            onChange={(e) => handleChange(e)}
            style={{
              borderRadius: '10em',
              backgroundColor: '#a9d09e',
              color: ' #032e45',
              fontWeight: 'bold',
            }}
            disabled={selectedDropdown && selectedDropdown !== 'structure'}
          >
            {categories[4].deviceType.map((c, i) => (
              <MenuItem
                style={{
                  color: c.name === 'Gutters and Downspouts' ? 'red' : 'black',
                }}
                key={c.name}
                value={c.name}
              >
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              margin: '0 33%',
            }}
            id="select-label"
          >
            Landscape
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={deviceTypeName?.landscape || ''}
            name="landscape"
            onChange={(e) => handleChange(e)}
            style={{
              borderRadius: '10em',
              backgroundColor: '#a9d09e',
              color: ' #032e45',
              fontWeight: 'bold',
            }}
            disabled={selectedDropdown && selectedDropdown !== 'landscape'}
          >
            {categories[5].deviceType.map((c, i) => (
              <MenuItem key={c.name} value={c.name}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="row jc-space-between">
          <button
            className="btn_sizeMin one text-xxs"
            onClick={() => window.location.reload()}
          >
            Reselect
          </button>
          <button
            className="btn_sizeMin two text-xxs"
            onClick={() => routeToMainIntake()}
          >
            Continue
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
