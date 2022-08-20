import React from 'react';
import { TableStructure } from './table_structure';

const trailersColumns = [
  { id: 'id', label: 'id' },
  { id: 'truck', label: 'Truck' },
  { id: 'cargo', label: 'Cargo' },
  { id: 'location', label: 'Location' },
]

function Trailers(props) {
  const { accessRight } = props
  return (
    <TableStructure
      tableColumns={trailersColumns}
      tableName='trailers'
      accessRight={accessRight}/>
  );
}

export default Trailers;