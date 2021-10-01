import React from 'react';
import { Input } from '../UI/Input';
import { Select } from '../UI/Select';

export const PostFilter = ({ filter, setFilter }) => {
  const options = [
    { value: 'title', desc: 'By Name' },
    { value: 'body', desc: 'By Description' },
  ];
  return (
    <div>
      <Input
        placeholder="filtration"
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        defaultValue="Sort By"
        options={options}
        value={filter.sort}
        onChange={e => setFilter({ ...filter, sort: e.target.value })}
      />
    </div>
  );
};
