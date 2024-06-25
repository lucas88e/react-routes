// projectsDetail.jsx
import React, {useState,useEffect} from "react"
import { Link} from "react-router-dom"
import projects from "../data/projects"  
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Projects(){

const [proyectos ,setProyectos] = useState([])

useEffect(()=>{

  setProyectos(projects)
},1000)

return(
  <>
    <h1>Toda información proyectos</h1>

<Row xs={1} md={2} className="g-2">
   {proyectos.map((student,index)=>(
            <Col key={index}>

  <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={student.image} />
  <Card.Body>
    <Card.Title> {student.name}</Card.Title>
    <Card.Text>
   { student.description}
    </Card.Text>
    <Link to ={student.url}>URL</Link>
    <p>     <Card.Link href="/">Go Home</Card.Link>
    </p>
    
  </Card.Body>
</Card>
</Col>

      ))}
</Row> 
 </>
)
}

export default Projects

// <ul>
//         <li  key={index}>
//           <p>Nombre: {student.name}</p>
//           <Link to ={student.url}>URL</Link>
        
//         <p>Descripcion{student.description}</p>
//         <img src={student.image}></img>

//           </li>
//           </ul>