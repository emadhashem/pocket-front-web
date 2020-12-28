import React, { memo } from 'react'
import NavBar from 'react-bootstrap/Navbar'
import {Button} from 'react-bootstrap'
import './nabbarComponent.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuth } from '../redux/actions/rootAction';
import { useHistory } from 'react-router-dom';
export default connect()(function NavBarCompnent({dispatch}) {
    const history = useHistory()
    async function handleLogOut () {
        const {status} = await axios.get('http://localhost:63342/RestAPI/api/logout.php');
        if(status == 200) {
            history.push('/auth')
            dispatch(setAuth("null"))
        }
    }
    return (
        <NavBar fixed="top" style = {{display : 'flex' , justifyContent : 'space-evenly' , 
            backgroundColor : 'rgba(0,0,0,.5)',
            
        }}>
            
            <NavBar.Brand>
            <span className = "logo">
                Pocket Tank
            </span>
            </NavBar.Brand>
            <div style = {{width : '50%'}}></div>
            <div style = {{display : 'flex' , justifyContent : 'space-between' , width : '20%'}} >
            <Button onClick = {handleLogOut} >
                LOG OUT
            </Button>
            <Button  >
                About Us
            </Button>
            </div>
         

        </NavBar>
    )
})
