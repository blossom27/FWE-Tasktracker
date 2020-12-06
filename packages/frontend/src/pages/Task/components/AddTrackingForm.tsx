import React, { ChangeEvent, useState } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input/Input';
import { Task } from '../../Dashboard/components/TaskList';

export const AddTrackingForm: React.FC<{ afterSubmit: () => void; task: Task }> = ({ afterSubmit, task }) => {
	const [values, setValues] = useState({
		description: '',
		taskId: task.taskid,
	});
	const fieldDidChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//console.log(values);
		await fetch('/api/tracking', {
			body: JSON.stringify(values),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		});
		afterSubmit();
	};

	return (
		<>
			<form onSubmit={onSubmitForm}>
				<Input name="description" type="text" label="Description" onChange={fieldDidChange} required={true} />

				<Input
					name="taskid"
					type="text"
					label="Task id"
					value={values.taskId}
					onChange={fieldDidChange}
					disabled={true}
				/>

				<Button type="submit">Add a tracking</Button>
			</form>
		</>
	);
};
