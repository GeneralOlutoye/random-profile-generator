import axios from "axios"
import { useEffect, useState } from "react";
import { Card, Button } from "antd"
import { IoLocation } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaMobile } from 'react-icons/fa';
import 'antd/dist/antd.css';
import './App.css';

export const App = () => {
  const [state, setState] = useState([])

  const ProfileData = async () => {
    await axios.get("https://randomuser.me/api").then((response) => {
      setState(response.data)
      console.log(response.data)
    }).catch(error => setState(error))
  };


  useEffect(() => {
    ProfileData()
  }, [])


  return (
    <div className='container' >
      <Card className="cardWrapper">
        {state.results?.map(item => <>
        {/* <div className="cardHeader"></div> */}
        <img src={item.picture?.large} alt="profilePicture" className='cardImg' />
        <h1>{item.name?.title} {item.name?.first} {item.name?.last} </h1>
        <p> < MdEmail/> {item.email} </p>
        <span> <FaMobile /> {item.cell} </span>
        <h3> <IoLocation /> {item.location?.country}, {item.location?.state} </h3>
        </>)}
        <Button className="button" onClick={()=>ProfileData()} type='primary' > New Profile </Button>
      </Card>
    </div>
  );
}