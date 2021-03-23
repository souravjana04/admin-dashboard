import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ShowTab from './ShowTab'
import Tabs from './Tabs'
import './App.css'
import ViewDetail from './ViewDetail'

const App = (props) => {
  const [ tabContent, setTabContent ] = useState('Front-End Developer')
  const [ data, setData ] = useState([])
  const [ isPopUpActive, setIsPopUpActive ] = useState(false)
  const [ selectedData, setSelectedData ] = useState([])

  useEffect(() => {
    axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
      .then(response => {
        const result = response.data
        setData(result)
      })
      .catch(err => alert(err.message))
  }, [])

  const updateState = (id, updatedData) => {
    const newData = data.map(ele => {
      if(ele._id === id) {
        return updatedData
      } else {
        return ele
      }
    })
    setData(newData)
  } 

  const changeStatus = (id, data) => {
    axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`, data)
      .then(response => {
        const result = response.data
        const id = result._id
        updateState(id, result)
      })
      .catch(err => alert(err.message))
  }

  const changeTabContent = (title) => setTabContent(title)

  const showHidePopUp = () => {
    setIsPopUpActive(!isPopUpActive)
  }

  const showProfile = (data) => {
    setSelectedData(data)
    showHidePopUp()
  }

  return (
    <div className='App'>
      <h1 className='dashboard-title'>Admin Dashboard</h1>
      <Tabs tabContent={tabContent} changeTabContent={changeTabContent} content='Front-End Developer' />
      <Tabs tabContent={tabContent} changeTabContent={changeTabContent} content='Node.js Developer' />
      <Tabs tabContent={tabContent} changeTabContent={changeTabContent} content='MEAN Stack Developer' />
      <Tabs tabContent={tabContent} changeTabContent={changeTabContent} content='FULL Stack Developer' />

      <ShowTab data={data} tabContent={tabContent} changeStatus={changeStatus} showProfile={showProfile} />
 
      { isPopUpActive && <ViewDetail data={selectedData} showHidePopUp={showHidePopUp} /> }
    </div>
  )
}

export default App;
