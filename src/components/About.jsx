
import React,{useContext} from 'react'
import { DataContext } from '../App'
import { Container, SkillsCom } from '../styles/styles';
import '../styles/about.css'

const About = () => {
    const data = useContext(DataContext);
  return (
    <Container>
        <h1>About</h1>
        <hr/>
        <div style={{textAlign:'center',margin:'2rem 0'}}>
        <img className='pic' src={data.basics?.picture} alt={data.basics?.name} width="200px" />
        <ul style={{listStyle:'none'}}>
            <li style={{fontSize:'1.5rem', marginBottom:'1rem'}} >Name:{data.basics?.name}</li>
            <li>{data.basics?.headline}</li>
            <li>{data.basics?.region}</li>
            <li>Tel:{data.basics?.phone}</li>

        </ul>
        <hr/>
        <h3>My Skills</h3>
        <SkillsCom>
            {data.skills?.map((val,idx)=>(
                <li key={idx}>
                   <strong>{val.name}</strong>
                   <br/>
                   level:{val.level}
                </li>
            ))}
        </SkillsCom>
        </div>
    </Container>
  )
}

export default About