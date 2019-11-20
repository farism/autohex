import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import { style } from 'typestyle'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import dirTree from 'directory-tree'
import Button from 'react-bootstrap/esm/Button'

const tree = dirTree(process.cwd())

export function App() {
  return (
    <div style={{ padding: 20 }}>
      {/* <ListGroup>
        <ListGroupItem>a</ListGroupItem>
        <ListGroupItem>b</ListGroupItem>
        <ListGroupItem>c</ListGroupItem>
      </ListGroup> */}
      <Dropdown>
        <DropdownToggle id="toggle">Trigger</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>a</DropdownItem>
          <DropdownItem>b</DropdownItem>
          <DropdownItem>c</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
