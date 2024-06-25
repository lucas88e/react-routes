import React, {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects.js"
import ListGroup from 'react-bootstrap/ListGroup';


function Home (){
const[developer,setDeveloper] = useState([])
useEffect(()=>{
    setTimeout(()=>{
      setDeveloper (projects)
    },1000)
  }, [])

  

  
  
    return (
    <>
      <h1>Breve descripcion de los developer</h1>
      <ListGroup>
      {developer.map((student)=>(
        <ListGroup.Item variant="secondary" key={student.id}>
        {student.description}

          </ListGroup.Item>
      ))}
      </ListGroup>
      <Link to ="/resume"> Resume</Link>
      <Link to ="/projects"> Projects</Link>


     
    </>
    )
  }
export default Home