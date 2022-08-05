import React, { useState } from 'react';
import { TableStructure } from './table_structure';

const cargoColumns = [
  { id: 'id', label: 'id' },
  { id: 'type', label: 'Type' },
  { id: 'weight', label: 'Weight' },
  { id: 'location', label: 'Location' },
  { id: 'destination', label: 'Destination' },
]

function Cargo(props) {
  const { accessRight } = props
  return (
    <TableStructure
      tableColumns={cargoColumns}
      tableName='cargo' 
      accessRight={accessRight}/>
  );
}

export default Cargo;