import React from 'react'
import ShowTable from './ShowTable'

const ShowTab = (props) => {
    const {data, tabContent, changeStatus, showProfile} = props

    const newData = data.filter(record => record.jobTitle === tabContent)

    return (
        <div id='tab-component'>
            <h2>{tabContent}</h2>
            <p>List of candidates applied for {tabContent} jobs</p>
            <ShowTable data={newData} changeStatus={changeStatus} showProfile={showProfile} />
        </div>
    )
} 

export default ShowTab