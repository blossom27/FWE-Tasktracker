import React, { ChangeEvent, useContext, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const DeleteLabelForm: React.FC<{afterSubmit:() => void}> = ({afterSubmit}) => {
  const [values, setValues] = useState({
    labelid: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const fieldDidChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`/api/label/${values.labelid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"labelid":values.labelid}),
    });
    afterSubmit();
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <Input
          name="labelid"
          type="text"
          label="Label ID"
          onChange={fieldDidChange}
          required
        />
        <Button type="submit">Create Label</Button>
      </form>
    </>
  );
};