import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';

import Select from '@mui/material/Select';
import { useState } from 'react';
import Iconify from './Iconify';
import { addData } from '../redux/formData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 2,
  maxHeight: '500px',
  overflow: 'auto',
  borderRadius: '5px',
  '@media (max-width:400px)': {
    width: 400,
    maxHeight: '500px',
  },

  '@media (min-width:1200px)': {
    width: 800,
    maxHeight: '700px',
  },
};

const button = {
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
};

const create = {
  border: '1px solid #EEB5EB',
  //    color: "#EEB5EB"
};

export default function BasicModal(props) {
  const [Job, setAge] = React.useState('');
  const [data,setData]=useState([]);
  const dispatch=useDispatch();
  const handleChange = (event) => {
    setAge(event.target.value);
    setJobType(event.target.value)
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },

    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [jobTitle,setJobTitle]=useState();
  const [companyName,setCompanyName]=useState();
  const [desc,setDesc]=useState();
  const [experience,setExperience]=useState();
  const [location,setLocation]=useState();
  const [address,setAddress]=useState();
  // const [skills,setSkills]=useState();
  const [skills,setSkills]=useState([])
  const [annuelCTC,setAnnuelCTC]=useState();
  const [position,setPosition]=useState();
  const [jobType,setJobType]=useState();
  const [education,setEducation]=useState();
  const [application,setApplication]=useState();
  const [status,setStatus]=useState();
  const handleFormSubmit=()=>{
    // console.log(data);
    // console.log(jobTitle,companyName,desc,experience,location,address,skills,
      // annuelCTC,position,jobType,education,application,status)
      const x = Math.floor(Math.random() * 1000000);
      const newData={
        id:x,
      jobTitle,
      companyName,
      desc,
      experience,
      location,
       address,
       selectedTeam,
       annuelCTC,
       position,
       jobType,
       education,
       application,
       status,
       type:props.type
    }
    // setData([...data,newData]);
    // console.log(data);
    // setSkills(["Inception"])
    const newDats=[...props.data,newData]
    props.setData([...props.data,newData])
    dispatch(addData(newData))
    // setSkills(["Inception"])
    setSkills([])
    handleClose();
    setJobTitle("")
    setCompanyName("")
    setDesc("")
    setExperience("")
    setLocation("")
    setAddress("")
    // setSkills([])
    setAnnuelCTC("")
    setSelectedTeam("");
    setPosition("")
    setJobType("")
    setEducation("")
    setApplication("")
    setStatus("")
  }
  return (
    <div>
      <Button sx={create} onClick={handleOpen} startIcon={<Iconify icon="eva:plus-fill" />}>
        {props.create}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="publish" id="modal-modal-title" variant="h4" component="h2">
            {/* Create Job Post */} {props.head}
          </Typography>
          <Divider />
          <br />
          {props.type === 'job' ? (
            <>
            <form onSubmit={()=>handleFormSubmit()}>
              <TextField required value={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} fullWidth id="outlined-basic" label="Job Title" variant="outlined" />
              <br />
              <br />
              <TextField required value={companyName} onChange={(e)=>setCompanyName(e.target.value)} fullWidth id="outlined-basic" label="Company Name" variant="outlined" />
              <br />
              <br />
              <TextareaAutosize
              required
                aria-label="minimum height"
                minRows={3}
                onChange={(e)=>setDesc(e.target.value)} 
                placeholder="Desc"
                value={desc}
                style={{ width: 745, padding: '20px', borderRadius: '10px' }}
                fullWidth
              />
              <br />
              <br />
              <TextField required value={experience} type="number"  onChange={(e)=>{
                if(e.target.value<0 || e.target.value>50) 
                {
                  alert("Enter a valid number")
                } 
                else{
                setExperience(e.target.value)
                }
              }
                }  fullWidth id="outlined-basic" label="Experience" variant="outlined" />
              <br />
              <br />
              <TextField required value={location} onChange={(e)=>setLocation(e.target.value)}  fullWidth id="outlined-basic" label="Location" variant="outlined" />
              <br />
              <br />
              <TextareaAutosize
              required
                aria-label="minimum height"
                minRows={3}
                value={address}
                placeholder="Address"
                onChange={(e)=>setAddress(e.target.value)} 
                style={{ width: 745, padding: '20px', borderRadius: '10px' }}
                fullWidth
              />
              <br />
              <br />
              <Autocomplete
                multiple
                // required
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                filterSelectedOptions
                // onChange={(e)=>{
                //   console.log(e)
                //   const newArray=[...skills,e.target.innerHTML]
                //   setSkills(newArray)
                //   console.log(skills)
                // }} 
                onChange={(_event, newTeam) => {
                  setSelectedTeam(newTeam);
                  // console.log(selectedTeam)
                }}
                renderInput={(params) => <TextField {...params} label="Skills" placeholder="Favorites" />}
              />
              <br />
              <br />
              <TextField required value={annuelCTC}   onChange={(e)=>setAnnuelCTC(e.target.value)}  fullWidth id="outlined-basic" label="Annuel CTC" variant="outlined" />
              <br />
              <br />
              <TextField required value={position} onChange={(e)=>setPosition(e.target.value)}  fullWidth id="outlined-basic" label="Position" variant="outlined" />
              <br />
              <br />
              <FormControl fullWidth>
                <InputLabel value={jobType} id="demo-simple-select-label">Job Type</InputLabel>
                <Select required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={jobType}
                  label="Job Type"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br />
              <TextField required value={education} onChange={(e)=>setEducation(e.target.value)}  fullWidth id="outlined-basic" label="Education" variant="outlined" />
              <br />
              <br />
              {/* <TextField onChange={(e)=>setExperience(e.target.value)}  fullWidth id="outlined-basic" label="Experience" variant="outlined" />
              <br />
              <br /> */}
              <TextField required value={application} onChange={(e)=>setApplication(e.target.value)}  fullWidth id="outlined-basic" label="Application" variant="outlined" />
              <br />
              <br />
              <TextField required value={status} onChange={(e)=>setStatus(e.target.value)}  fullWidth id="outlined-basic" label="Status" variant="outlined" />
              <br />
              <br />
              <div className="row" style={button}>
                <Button   onClick={()=>handleClose()} variant="outlined" sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button type='submit'
                //  onClick={()=>handleFormSubmit()}
                  variant="contained">Save</Button>
              </div>
              </form>
            </>
            
          ) : (
            <>
              <TextField fullWidth id="outlined-basic" label="Event Title" variant="outlined" />
              <br />
              <br />
              <TextField fullWidth id="outlined-basic" label="Company Name" variant="outlined" />
              <br />
              <br />
              <TextField fullWidth id="outlined-basic" label="Experience" variant="outlined" />
              <br />
              <br />
              <TextField fullWidth id="outlined-basic" label="Location" variant="outlined" />
              <br />
              <br />
              <div className="row" style={button}>
                <Button variant="outlined" sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button  variant="contained">Save</Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
