import styled from "styled-components";
import {Link} from 'react-router-dom';


export const Container = styled.div`
     max-width:960px;
     margin: 0 auto;
     
`

export const NavBar = styled.nav`
      background:#333;
      height:50px;
      
      
`
export const  NavCon = styled.div`
      height:50px;
      display:flex;
      justify-content:space-between;
      align-item:center;
     

      `
export const Logo = styled(Link)`
    margin-top:15px;
    position:absolute;
      color:#fff;
      text-decoration:none;
     
      font-weight:bold;
      
      
`
export const Menu = styled.ul`
      display:flex;
      list-style:none;
       
      li{
        margin: 0 1rem;
        a:hover {
            color:#ffc14f;
            
        }
        a {
            color:#fff;
            text-decoration:none;
            
        }
      }
`

export const HomeLayout = styled.div`
     display:flex;
     justify-content:space-between;
`
export const SkillsCom = styled.ul`
     display:flex;
     justify-content:center;
     list-style:none;

     li{
        margin:1rem;
        background:#333;
        color:#fff;
        border-radius:5px;
        padding:1rem;
        box-shadow: 10px 10px 40px grey;
        strong{
            color:#ffc14f;
        }
     }
`
export const FooterCom = styled.footer`
     padding:1rem;
     text-align:center;
     background:#333;
     color:#fff;
     position:fixed;
     bottom:0;
     width:100%
`
