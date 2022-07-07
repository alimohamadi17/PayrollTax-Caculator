import React from 'react'





function Result(props) {
    const { salary, experience, desTax, tax } = props;

    return (
        <div className='result' >

            Total Salary : {experience ? salary : 0}  <small>SEK</small> | Tax : {desTax}  <small>SEK</small>  | Salary After Tax : {tax}  <small>SEK</small>

        </div>
    )
}

export default Result