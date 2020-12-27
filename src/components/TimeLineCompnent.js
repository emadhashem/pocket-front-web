import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import {Button} from 'react-bootstrap'
import GameCompenent from './GameCompenent'
const mockData = [
    1, 2, 3, 4, 5, 6
]
export default memo(function TimeLineCompnent() {
    return (
        <div style = {{width : '46%'}}>
             <div style = {{width : '100%',}}>
                    <p style = {{textAlign : 'center' ,
                     fontSize : 20, fontWeight : 'bolder'}}>Last Matches</p>
                    <div>
                        {
                            mockData.map(item => (
                                <GameCompenent />
                            ))
                        }
                    </div>
                </div> 
        </div>
    )
})
