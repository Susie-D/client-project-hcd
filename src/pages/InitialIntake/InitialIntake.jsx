import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { PageLayout } from '../pages';
import { categories } from '../../data/categories';
import './_initialIntake.scss';
import '../../styles/_styles.scss';

export default function InitialIntake() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [deviceTypeName, setDeviceTypeName] = useState({});
  const [currentDeviceTypeName, setCurrentDeviceTypeName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDropdown, setSelectedDropdown] = useState(false);
  const deviceTypes = useSelector((store) => store.deviceTypesReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_DEVICE_TYPES' });
  }, [dispatch]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDeviceTypeName({
      ...deviceTypeName,
      [name]: value,
    });
    setCurrentDeviceTypeName(value);
    if (value) {
      setSelectedDropdown(name);
      dispatch({
        type: 'FETCH_DEVICE_TYPE',
        payload: value,
      });
    } else {
      setSelectedDropdown('');
    }
  };

  const routeToMainIntake = () => {
    const createDevicePath = currentDeviceTypeName
      .split(' ')
      .join('-')
      .toLowerCase();
    history.push(`/${createDevicePath}-intake`);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSelectDevice = (deviceName) => {
    const createDevicePath = deviceName.split(' ').join('-').toLowerCase();
    history.push(`/${createDevicePath}-intake`);
  };

  const filteredDeviceTypes = deviceTypes.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="initial-intake-container column ac-center">
        <div className="initial-intake-search">
          <input
            type="text"
            placeholder="Search Devices Type..."
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
          />
          {searchQuery && (
            <ul>
              {filteredDeviceTypes.map((item, index) => (
                <a key={index} onClick={() => handleSelectDevice(item.name)}>
                  <p>{item.name}</p>
                </a>
              ))}
            </ul>
          )}
        </div>

        <div className="header-five dark">
          ... or select a single device type:
        </div>
        <FormControl fullWidth style={{ marginTop: '10px' }}>
          <InputLabel
            style={{
              margin: '-10px 40%',
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
              height: '2.5em',
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
              margin: '-10px 33%',
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
              height: '2.5em',
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
              margin: '-10px 33%',
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
              height: '2.5em',
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
              margin: '-11px 38%',
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
              height: '2.5em',
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
              margin: '-11px 33%',
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
              height: '2.5em',
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
              margin: '-11px 33%',
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
              height: '2.5em',
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
