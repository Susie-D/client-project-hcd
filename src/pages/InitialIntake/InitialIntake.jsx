import { useState } from 'react';
import { PageLayout } from '../pages';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Heating-Ventilating-AC
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={() => handleChange(e)}
            style={{ borderRadius: '10em', backgroundColor: '#6cb051' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '15px' }}>
          <InputLabel id="demo-simple-select-label">Appliance</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={() => handleChange(e)}
            style={{ borderRadius: '10em' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '15px' }}>
          <InputLabel id="demo-simple-select-label">Plumbing</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={() => handleChange(e)}
            style={{ borderRadius: '10em' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '15px' }}>
          <InputLabel id="demo-simple-select-label">Safety</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={() => handleChange(e)}
            style={{ borderRadius: '10em' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '15px' }}>
          <InputLabel id="demo-simple-select-label">Structure</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            className=""
            onChange={() => handleChange(e)}
            style={{ borderRadius: '10em' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginTop: '15px' }}>
          <InputLabel id="demo-simple-select-label">Landscape</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={() => handleChange(e)}
            style={{ borderRadius: '10em' }}
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
