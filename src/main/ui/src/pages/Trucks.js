import React, { useState } from 'react';
import { TableStructure } from './table_structure';

const trucksColumns = [
  { id: 'id', label: 'id' },
  { id: 'model', label: 'Model' },
  { id: 'driver', label: 'Driver' },
  { id: 'location', label: 'Location' },
]

function Trucks(props) {
  const { accessRight } = props
  return (
    <TableStructure
      tableColumns={trucksColumns}
      tableName='trucks'
      accessRight={accessRight}/>
  );
}

export default Trucks;