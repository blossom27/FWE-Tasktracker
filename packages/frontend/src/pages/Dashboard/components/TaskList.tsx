import React, { useState } from "react";
import styled from "styled-components/macro";
import { TaskPage } from "../../Task/TaskPage";
import { AddButton } from "../../../components/AddButton";
import { Redirect } from "react-router-dom";
import { Tracking } from "../../Task/components/TrackingList";
import { DeleteButton } from "../../../components/DeleteButton";
import { NormalButton } from "../../../components/NormalButton";

export type Label = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: Task[];
};

export type Task = {
  taskid: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  labels: Label[];
  trackings: Tracking[];
};

export const LabelList = styled.ul`
  list-style: none;
  flex-grow: 1;
  font-size: 0.8rem;

  align-self: flex-end;
  display: flex;
  & > li {
    margin-right: 0.5rem;
    padding: 0.125rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.colors.primary};
    display: block;
    color: #333;
  }
`;

export const StyledTimer = styled.div`

`;

export const TaskFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const TaskHighlight = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: none;
  width: 4px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const TaskItemStyle = styled.div`
  margin: 0;
  min-height: 3rem;
  position: relative;
  padding: 0.7rem 0.7rem;
  &:hover {
    ${TaskHighlight} {
      display: block;
    }
  }
`;
export const TaskList = styled.ul`
  list-style: none;
  box-shadow: 0 0.125em 0.25em 0 ${(props) => props.theme.colors.shadowColor};
  width: 100%;
  padding: 0;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.listBackgroundColor};
  ${TaskItemStyle} {
    border-bottom: 1px ${(props) => props.theme.colors.shadowColor} solid;
    &:last-of-type {
      border-bottom: 0;
    }
  }
`;

export const TaskTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;

export const TaskDescription = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;
export const TaskDate = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.secondaryFontColor};
`;
export const TaskValue = styled.span`
  white-space: nowrap;
`;
export type TaskItemProps = {
  task: Task;
  onClick?: (task: Task) => void;
  fetchTask: () => void;
};

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onClick = () => {
    return <Redirect to="/taskpage" />;
  },
  fetchTask,
}) => {
  const { name, description, createdAt, updatedAt, labels } = task;

  const deleteTask = async function (task: Task) {
    await fetch(`/api/task/${task.taskid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    fetchTask();
  };

  const [state, setState] = useState<string>("Start Timer");
  let buttonText: string = "Start Timer";
  const handleClick = () => {
    console.log("Button clicked...")
    buttonText = (buttonText == "Start Timer" ? "Stop Timer" : "Start Timer")
    setState(buttonText);
  }
  return (
    <TaskList>
      <TaskItemStyle>
        <TaskHighlight />
        <TaskFlex
          onClick={() => {
            onClick(task);
          }}
        >
          <div>
            <TaskTitle>{name}</TaskTitle>
            <TaskDescription>{description}</TaskDescription>
            <TaskDate>{createdAt && createdAt.toLocaleString()}</TaskDate>
          </div>
          <LabelList>
            {labels &&
              labels.map((label: Label) => {
                return <li key={label.id}>{label.name}</li>;
              })}
          </LabelList>
        </TaskFlex>
        <div
          css={`
            display: flex;
            flex-direction: row;
            width: 100%;
          `}
        >
          <NormalButton onClick={() => {handleClick();}}>{state}</NormalButton>
          <div
            css={`
              flex: 1;
              justify-content: flex-end;
              display: flex;
              align-items: top;
            `}
          >
            <DeleteButton
              onClick={() => {
                deleteTask(task);
              }}
            />
          </div>
        </div>
      </TaskItemStyle>
    </TaskList>
  );
};
