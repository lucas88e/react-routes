import { Link} from "react-router-dom"
import { studies, experiences} from "../data/resume"
import React, {useState,useEffect} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Resume(){
    const [estudiantes, setEstudiantes] = useState([])
    const [experiencias ,setExperiencias ] = useState([])
    useEffect(()=>{

        setEstudiantes(studies)
        setExperiencias(experiences)
      },[])

    return(
        <>
        <h2>Estudiantes</h2>

        {estudiantes.map((student,index)=>(
  <Card key = {index} style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title> {student.title}</Card.Title>
    <Card.Text>
    Descripcion { student.institution}
   <p>Fecha{student.date}</p>

    </Card.Text>
    <Link to ="/">Go HOme</Link>
    
  </Card.Body>
</Card>
      ))}
        <h2>Experiencias</h2>
            {experiencias.map((student,index)=>(
              <Card key = {index} style={{ width: '18rem' }}>
  
              <Card.Body>
                <Card.Title>{student.title}</Card.Title>
                <Card.Text>
                Empresa: {student.company}
               <p>Fecha: {student.date}</p>
            
                </Card.Text>
                <Link to ="/">Go HOme</Link>
                
              </Card.Body>
            </Card>

      ))}


        </>
    )


}
{/* <ul>
        <li  key={index}>
          <p>Puesto : {student.title}</p>
        <p>Empresa: {student.company}</p>
        <p>Fecha:{student.date}</p>


          </li>
          </ul> */}
{/* <ul>
        <li  key={index}>
        <p>Titulo: {student.title}</p>
        <p>Descripcion{student.institution}</p>
        <p>Fecha{student.date}</p>


          </li>
          </ul> */}

export default Resume
{/* <ul>
        <li  key={index}>
        <p>Titulo: {student.title}</p>
        <p>Descripcion{student.institution}</p>
        <p>Fecha{student.date}</p>


          </li>
          </ul> */}