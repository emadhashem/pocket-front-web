import { Divider, List, ListItem } from '@material-ui/core'
import React, { memo } from 'react'

export default memo(function TpComponent() {
    return (
        <div style = {{width : '22%' , paddingRight : 17 , position : 'relative'}} >
            <div style = {{position : 'fixed' , width : '20%'}}>
            <div style = {{textAlign : 'center' , marginBottom : 20}}>
                <a href="#"> UserName </a>
            </div>
            <div >
                <List>
                    <ListItem style = {{textAlign : 'center'}}>
                        <p style = {{fontSize : 25}}> Top Players Rate</p>
                    </ListItem>
                    <Divider />
                    <ListItem style = {{textAlign : 'center'}}>
                        player 1
                    </ListItem>
                    <Divider style = {{marginTop : 25}} />
                    <ListItem style = {{textAlign : 'center'}}>
                        player 1
                    </ListItem>
                    <Divider style = {{marginTop : 25}} />
                    <ListItem style = {{textAlign : 'center'}}>
                        player 1
                    </ListItem>
                    <Divider style = {{marginTop : 25}} />
                </List>
            </div>
            </div>
        </div>
    )
})
