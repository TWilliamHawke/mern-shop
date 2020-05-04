import React, { useState } from 'react';
import AddField from './components/AddField';

const EditCategory = () => {
  const [addField, setAddField] = useState(false)


  return (
    <div>
      EditCategory
      <AddField setShowForm={setAddField} showForm={addField} />
    </div>
  );
};

export default EditCategory;