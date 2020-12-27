import { Button } from '@material-ui/core'
import React, { memo } from 'react'
import { connect } from 'react-redux'
import { setAuth } from '../redux/actions/rootAction'
import NavBarCompnent from './NavBarCompnent'
import RulesComponent from './RulesComponent'
import TimeLineCompnent from './TimeLineCompnent'
import TpComponent from './TpComponent'

export default connect()(function HomeCompenet({dispatch}) {
    function handleLogOut() {
        dispatch(setAuth("null"))
        // history  
    }
    return (
        <div>
           <NavBarCompnent/>
           <div style = {{marginTop : 100 , display : 'flex' , justifyContent : 'space-between' , flexDirection : 'row'}}>
                <RulesComponent />
                <TimeLineCompnent />
                <TpComponent />

           </div>
        </div>
    )
})
