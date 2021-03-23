import React from 'react'

const ViewDetail = (props) => {
    const { data, showHidePopUp } = props

    const skills = data.skills.split(',')

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <p>{data.name} Profile <span onClick={showHidePopUp}> x </span> </p>
                </div>
                <div className='modal-body'>
                    <table className='modal-table'>
                        <tbody>
                            <tr>
                                <td>Contact number</td>
                                <td>{data.phone}</td>
                            </tr>
                            <tr>
                                <td>Email </td>
                                <td>{data.email}</td>
                            </tr>
                            <tr>
                                <td>Skills</td>
                                <td>
                                    {
                                        skills.map((ele,i) => <p className='skill-list' key={i}>{ele.trim()}</p>)
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Experience</td>
                                <td>{data.experience}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='modal-footer'>
                    <button onClick = {showHidePopUp}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ViewDetail