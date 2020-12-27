import React, { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import HomeCompenet from '../components/HomeCompenet';

const mapStateToProps = ({user}) => ({
    user : user
})
export default connect(mapStateToProps)(function HomeScreen({user}) {
    const history = useHistory(); 
    useEffect(() => {
        console.log(user.user);
        if(user.user == "null") {
            history.push('/auth')
        }
    } , [])
    
    return (
        <HomeCompenet />
    )
})
