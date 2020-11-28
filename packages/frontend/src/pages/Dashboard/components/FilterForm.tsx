import React, { ChangeEvent, useContext, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const FilterForm: React.FC<{afterSubmit:() => void, filter:any , setFilter:any }> = ({afterSubmit, filter, setFilter}) => {
  const [values, setValues] = useState({
    name:"",
    description:"",
    labelname: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const fieldDidChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(values);
    afterSubmit();
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <Input
          name="name"
          type="text"
          label="Name"
          onChange={fieldDidChange}
          
        />
        <Input
          name="description"
          type="text"
          label="Description"
          onChange={fieldDidChange}
          
        />
        <Input
          name="labelname"
          type="text"
          label="Label"
          onChange={fieldDidChange}
          
        />
        <Button type="submit">Filter Task</Button>
      </form>
    </>
  );
};