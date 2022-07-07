
const BasicSalary = {
    Developer: 30000,
    Teacher: 27000,
    Cashier: 25000
}

const increaseSalaryByYearsOfExperience = [
    { min: 0, max: 3, rate: 0 },
    { min: 4, max: 7, rate: 0.2 },
    { min: 8, max: 10, rate: 0.4 },
    { min: 11, max: Infinity, rate: 0.6 }
];





const location = [

    {
        id: 0,
        city: 'Stockholm',
        years: {
            2019: '0.3',
            2020: '0.29'
        }

    },
    {
        id: 1,
        city: 'Gotenborg',
        years: {
            2019: '0.25',
            2020: '0.22'
        }

    }
]


module.exports = { BasicSalary, increaseSalaryByYearsOfExperience, location }