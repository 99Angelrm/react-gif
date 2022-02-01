import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((cat) => [ inputValue,...cat]);
            setInputValue("");
        }
    };
    return (
        <form onSubmit={handlerSubmit}>
            <input
                type={"text"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
