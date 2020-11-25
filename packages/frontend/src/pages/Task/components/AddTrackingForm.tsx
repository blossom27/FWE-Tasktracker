import React, { ChangeEvent, useContext, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Task } from "../../Dashboard/components/TaskList";

export const AddTrackingForm: React.FC<{ afterSubmit: () => void; task: Task }> = ({
  afterSubmit,
  task,
}) => {
  const [values, setValues] = useState({
    description: "",
    taskId: task.taskid
    
  });
  const [formError, setFormError] = useState<string | null>(null);
  const fieldDidChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    await fetch("/api/tracking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    afterSubmit();
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <Input
          name="description"
          type="text"
          label="Description"
          onChange={fieldDidChange}
          required
        />

        <Input
          name="taskid"
          type="text"
          label="Task id"
          value={values.taskId}
          onChange={fieldDidChange}
          disabled
        />

        <Button type="submit">Add Tracking</Button>
      </form>
    </>
  );
};
