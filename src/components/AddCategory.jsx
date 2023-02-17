import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const onchangeInput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory((category) => [ value,...category]);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={onchangeInput} />
    </form>
  );
};

export default AddCategory;
AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
