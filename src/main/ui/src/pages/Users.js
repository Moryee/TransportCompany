import React from 'react';
import { TableStructure } from './table_structure';

const usersColumns = [
  { id: 'username', label: 'Username' },
  { id: 'password', label: 'Password' },
  { id: 'access_right', label: 'Access Right' },
]

function Users(props) {
  const { accessRight } = props
  return (
    <TableStructure
      tableColumns={usersColumns}
      tableName='users'
      accessRight={accessRight}/>
  );
}

export default Users;