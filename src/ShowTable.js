import React from 'react'
import moment from 'moment'

const ShowTable = (props) => {
    const {data, changeStatus, showProfile} = props

    const handleAppStatus = (id, status) => {
        const data = {
            status: status
        }
        changeStatus(id,data)
    }

    return(
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th id='name-col'>Name</th>
                        <th id='tech-skill-col'>Technical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Detail</th>
                        <th id='status-col'>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(ele => {
                            return (
                                <tr key={ele._id}>
                                    <td>{ele.name}</td>
                                    <td>{ele.skills}</td>
                                    <td>{ele.experience}</td>
                                    <td>{moment(ele.createdAt).format('DD/MM/YYYY')}</td>
                                    <td><button id='view-detail-btn' onClick={() => {
                                        showProfile(ele)
                                    }}>View Details</button></td>
                                    {
                                        ele.status === 'applied' ? (
                                            <td>
                                                <button className='shortlist-btn' onClick={() => handleAppStatus(ele._id, 'shortlisted')}>Shortlist</button>
                                                <button className='reject-btn' onClick={() => handleAppStatus(ele._id, 'rejected')}>Reject</button>
                                            </td>
                                        ) : (
                                            <td>
                                                {
                                                    ele.status === 'shortlisted' ? <button className='shortlist-btn'>{ele.status}</button> : <button className='reject-btn'>{ele.status}</button>
                                                }
                                            </td>
                                        )
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowTable