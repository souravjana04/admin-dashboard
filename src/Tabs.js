import React from 'react'

const Tabs = (props) => {
    const{tabContent, changeTabContent, content} = props
    return (
        <p className={tabContent===content ? 'tabs tabs-active' : 'tabs'} 
            onClick = {() => {
                changeTabContent(content)
            }}> {content} </p>
    )
}

export default Tabs 