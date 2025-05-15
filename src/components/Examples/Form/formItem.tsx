import React from 'react';

const FormItem = () => {
  return (
    <div className="form-item">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" data-testid="name-input" />
    </div>
  );
};

export default FormItem;
