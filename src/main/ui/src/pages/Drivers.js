import React from 'react';
import { TableStructure } from './table_structure';

const driversColumns = [
  { id: 'id', label: 'id' },
  { id: 'name', label: 'Name' },
  { id: 'surname', label: 'Surname' },
]

function Drivers(props) {
  const { accessRight } = props
  return (
    <TableStructure
      tableColumns={driversColumns}
      tableName='drivers' 
      accessRight={accessRight}/>
  );
}

export default Drivers;