import React, { useEffect, useState } from 'react'
import './Task1.css'

//Start of checkbox button
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//end of checkbox button

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import Button from '@mui/material/Button';
import Result from './result';

import data from './data';
function Task1() {




    const [profession, setProfession] = useState('Developer')
    const [salary, setSalary] = useState(data.BasicSalary[profession])
    const [experience, setExperience] = useState()
    const [city, setCity] = useState('Stockholm')
    const [year, setYear] = useState("2019")
    const [tax, setTax] = useState(0)
    const [id, setId] = useState(0)
    const [open, setOpen] = useState(false)
    const [desTax, setDesTax] = useState(0)



    const hangleMultiCity0 = (e) => {
        setCity(e.target.value)
        setId(0)

    }

    const hangleMultiCity1 = (e) => {
        setCity(e.target.value)
        setId(1)
    }

    const handleMultiYaers = (event) => {
        setYear(event.target.value)

    }


    const result = (e) => {
        if (experience && city && year && salary) {

            let res = data.location.find(item => item.id === id)

            let tax1 = salary - Math.round(salary * res.years[year])

            setTax(tax1)
            setDesTax(salary - tax1)
        }
        setOpen(true)

    }




    const handleChange = () => {

        let increaseSalary = data.increaseSalaryByYearsOfExperience.find(item => item.min <= experience && item.max >= experience)

        let y = data.BasicSalary[profession] + increaseSalary.rate * data.BasicSalary[profession]

        return y
    }


    const handleChecked = (e) => {

        setProfession(e.target.value)
    }


    //upDate salary with useEffect if profession && experience change
    useEffect(() => {

        if (profession && experience) {
            setSalary(handleChange())

        }


    }, [experience, profession,])// eslint-disable-line react-hooks/exhaustive-deps





    return (
        <div>

            <span className='professional' > profession  :  {profession} </span>


            <br />
            <span>Years of Experience  :  </span>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="standard-basic" variant="standard"
                    type='number' onChange={(e) => { setExperience(e.target.value) }}
                />
            </Box>
            {/* <input type='number' onChange={(e) => { setExperience(e.target.value) }} required /> */}

            <br />

            <div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Profession : </FormLabel>
                    <RadioGroup
                        defaultValue={"Developer"}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={handleChecked}

                    >
                        <FormControlLabel id='Developer' value="Developer" control={<Radio />} label="Developer" />
                        <FormControlLabel id='Teacher' value="Teacher" control={<Radio />} label="Teacher" />
                        <FormControlLabel id='Cashier' value="Cashier" control={<Radio />} label="Cashier" />
                    </RadioGroup>
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">City : </FormLabel>
                    <RadioGroup
                        defaultValue={"Stockholm"}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel onChange={hangleMultiCity0} value="Stockholm" id={1} control={<Radio />} label="Stockholm" />
                        <FormControlLabel onChange={hangleMultiCity1} value="Götenborg" id={2} control={<Radio />} label="Götenborg" />
                    </RadioGroup>
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Years : </FormLabel>
                    <RadioGroup
                        defaultValue={"2019"}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={handleMultiYaers}
                    >
                        <FormControlLabel value="2019" id={id} control={<Radio />} label="2019" />
                        <FormControlLabel value="2020" id={id} control={<Radio />} label="2020" />
                    </RadioGroup>
                </FormControl>
            </div>


            <Button variant="contained" onClick={result} >Click Me!</Button>

            <br />
            {open &&
                <div>
                    <Result open={open} setOpen={setOpen} experience={experience} salary={salary} desTax={desTax} tax={tax} />
                </div>

            }   </div >

    )
}

export default Task1