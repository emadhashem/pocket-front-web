import { Divider, List, ListItem } from '@material-ui/core'
import Axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
const mapStateToProps = ({user}) => ({
    user
})
export default connect(mapStateToProps)(function TpComponent({user}) {
    const [data , setdata] = useState([])
    useEffect(async () => {
        const {data , status} = await Axios.get('http://localhost:63342/web-api/src/api/scoreboard.php')
        if(status == 200) {
            setdata(data)
        }
    } , [])
    return (
        <div style = {{width : '22%' , paddingRight : 17 ,
         position : 'relative', 
         backgroundColor : 'rgba(0,0,0,.5)', paddingTop : 15, marginRight : 15}} >
            <div style = {{position : 'fixed' , width : '20%'}}>
            <div style = {{textAlign : 'center' , marginBottom : 20}}>
                <a href="#"> {user.user} </a>
            </div>
            <div >
                <div style = {{textAlign : 'center'}}>
                    <p style = {{fontSize : 25}}> Top Players Rate</p>
                </div>
                <List>
                   {
                       data.map(item => (
                           <div style = {{display : 'flex' , height : 50, 
                           marginBottom : 20, marginTop : 15, 
                           justifyContent : 'space-around', flexDirection : 'column'}} >
                               <div>{item.userName}</div>
                               <div>{item.score}</div>
                           </div>
                       ))
                   }
                    
                </List>
            </div>
            </div>
        </div>
    )
})
