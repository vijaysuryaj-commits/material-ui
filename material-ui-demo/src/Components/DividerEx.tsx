import  { Component } from 'react'
import { Divider, List } from '@mui/material'
import {ListItem} from '@mui/material'
import {ListItemText} from '@mui/material'

const style ={
    py:0,
    width:'100%',
    maxWidth:360,
    borderRadius:2,
    border:'1px solid',
    borderColor:'divider',
    backgroundColor:'background.paper'
}

export class DividerEx extends Component {
  render() {
    return (
      <List sx={style}>
      <ListItem>
        <ListItemText primary="Full width variant below" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Inset variant below" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="Middle variant below" />
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem>
        <ListItemText primary="List item" />
      </ListItem>
    </List>
    )
  }
}

export default DividerEx