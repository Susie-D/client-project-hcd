import { useState } from 'react';
import { PageLayout } from '../pages';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { categories } from '../../data/categories';
import './_initialIntake.scss';
import '../../styles/_styles.scss';

export default function InitialIntake() {
  const [deviceTypeName, setDeviceTypeName] = useState({});
  const [selectedDropdown, setSelectedDropdown] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;
    setDeviceTypeName({
      ...deviceTypeName,
      [name]: value,
    });
    if (value) {
      setSelectedDropdown(name);
    } else {
      setSelectedDropdown('');
    }
  };

  return (
    <PageLayout>
      <div className="initial-intake-container column ac-center">
        <FormControl fullWidth style={{ marginTop: '10px' }}>
          <InputLabel
            style={{
              fontWeight: 'bold',
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
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
            disabled={selectedDropdown && selectedDropdown !== 'hvac'}
          >
            {categories[0].deviceType.map((c, i) => (
              <MenuItem value={c.name} label={c.name}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              fontWeight: 'bold',
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
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            {categories[1].deviceType.map((c, i) => (
              <MenuItem value={c.name}>{c.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              fontWeight: 'bold',
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
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            {categories[2].deviceType.map((c, i) => (
              <MenuItem value={c.name}>{c.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              fontWeight: 'bold',
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
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            {categories[3].deviceType.map((c, i) => (
              <MenuItem value={c.name}>{c.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              margin: '0 35%',
              fontWeight: 'bold',
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
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            {categories[4].deviceType.map((c, i) => (
              <MenuItem value={c.name}>{c.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              margin: '0 33%',
              fontWeight: 'bold',
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
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            {categories[5].deviceType.map((c, i) => (
              <MenuItem value={c.name}>{c.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </PageLayout>
  );
}
