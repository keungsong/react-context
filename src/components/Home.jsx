import React,{useContext} from 'react'
import { DataContext } from '../App'
import { Container,HomeLayout } from '../styles/styles';
import '../styles/home.css'

const Home = () => {

    const data = useContext(DataContext);
    console.log(data);
  return (
    <Container>
        <h1>Home</h1>
        <HomeLayout>
            <img className='pro_pic' src={data.basics?.picture} alt={data.basics?.name} />
            <ul style={{listStyle:'none'}}>
                <li style={{fontSize:'2rem'}}>{data.basics?.name}</li>
                <li style={{fontSize:'1.2rem'}}>{data.basics?.headline}</li>
            </ul>
        </HomeLayout>
    </Container>
  )
}

export default Home