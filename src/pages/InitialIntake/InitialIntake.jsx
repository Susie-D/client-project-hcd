import { useState } from 'react';
import { PageLayout } from '../pages';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { categories } from '../../data/categories';
import './_initialIntake.scss';
import '../../styles/_styles.scss';

export default function InitialIntake() {
  const { age, setAge } = useState('');

  const handleChange = (e) => {
    preventDefault(e);
    console.log(e.target.age);
  };

  return (
    <PageLayout>
      <div className="initial-intake-container column ac-center">
        <FormControl fullWidth style={{ marginTop: '30px' }}>
          <InputLabel
            style={{
              fontWeight: 'bold',
              margin: '0 15%',
            }}
            id="select-label"
          >
            Heating-Ventilating-AC
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={age}
            label="hvac"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            {categories[0].deviceType.map((c, i) => (
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
            Appliance
          </InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={age}
            label="appliance"
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
            value={age}
            label="plumbing"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            value={age}
            label="safety"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            value={age}
            label="structure"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            value={age}
            label="Age"
            onChange={() => handleChange(e)}
            style={{ borderRadius: '10em', backgroundColor: '#a9d09e' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </PageLayout>
  );
}
