import { useState, useEffect } from 'react';
import { PageLayout } from '../pages';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { categories } from '../../data/categories';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './_initialIntake.scss';
import '../../styles/_styles.scss';

import { styled, alpha, InputBase } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

export default function InitialIntake() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

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
        <div>
          <input
            type="text"
            placeholder="Search Devices Type..."
            value={searchQuery}
            onChange={(event) => handleSearch(event.target.value)}
          />
          {searchQuery && (
            <ul>
              {filteredDeviceTypes.map((item, index) => (
                <li key={index} onClick={() => handleSelectDevice(item.name)}>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search> */}
        <div className="header-five dark">
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
