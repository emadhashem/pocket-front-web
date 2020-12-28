import React, { memo } from 'react'
import {Button} from 'react-bootstrap'
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';
export default memo(function RulesComponent() {
    return (
        <div style = {{width : '23%' , marginLeft : 17 , position : 'relative' , backgroundColor : 'rgba(0,0,0,.5)', paddingTop : 15}} >
            <div style = {{position : 'fixed' , width : '20%'}}>
            <div style = {{textAlign : 'center' , marginBottom : 20}}>
                <Button >
                    <CloudDownloadRoundedIcon/>
                </Button>
            </div>
            <div>
                
                <p style = {{textAlign : 'center'}}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Curabitur et velit a arcu porttitor tincidunt. 
                Maecenas sodales sed diam in ornare. Etiam venenatis
                 lacinia ex, at iaculis lacus ultrices a. Duis venenat
                 is convallis auctor. Sed id tellus vel turpis congue varius.
                  Sed ac tincidunt ligula.
                 Mauris vitae lacus non risus hendrerit bibendum. Suspendisse potenti. Aenean
                </p>
            </div>
            </div>
        </div>
    )
})
