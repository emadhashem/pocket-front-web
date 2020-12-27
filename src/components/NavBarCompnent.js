import React, { memo } from 'react'
import NavBar from 'react-bootstrap/Navbar'
import {Button} from 'react-bootstrap'
import './nabbarComponent.css';
export default memo(function NavBarCompnent() {
    return (
        <NavBar fixed="top" style = {{display : 'flex' , justifyContent : 'space-evenly' , 
            
        }}>
            
            <NavBar.Brand>
            <span className = "logo">
                Pocket Tank
            </span>
            </NavBar.Brand>
            <div style = {{width : '50%'}}></div>
            <div style = {{display : 'flex' , justifyContent : 'space-between' , width : '20%'}} >
            <Button >
                LOG OUT
            </Button>
            <Button  >
                About Us
            </Button>
            </div>
         

        </NavBar>
    )
})
