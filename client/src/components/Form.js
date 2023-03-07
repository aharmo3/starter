import React, { useState, createContext } from "react";
export const FormContext = createContext({
  form: {},
  handleSubmit: () => {},
});
export default function Form({ children, formInitialValues, submit }) {
  const [form, setForm] = useState(formInitialValues);
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };
    console.log("Form changed: ", updatedForm);

    // Update state
    setForm(updatedForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello there");
    return submit(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
          handleSubmit,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
}
