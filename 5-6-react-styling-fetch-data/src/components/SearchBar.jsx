import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ searchTerm, setSearchTerm }) {  
  return (
    <div className="mb-4">
      <InputGroup>
        <InputGroup.Text></InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar