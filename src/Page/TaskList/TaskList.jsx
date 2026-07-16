import React from "react";
import TaskCard from "../Task/TaskCard/TaskCard";

const taskSamples = [
  {
    id: 1,
    title: "Smart Watch UI Design",
    description:
      "Create a polished dashboard experience with refined interactions, rich details, and a modern visual system for the next product showcase.",
    techStack: ["Figma", "React", "Motion", "UI Kit"],
    status: "In Review",
    priority: "High Priority",
    dueDate: "Due 24 Jul",
  },
  {
    id: 2,
    title: "Mobile Checkout Flow",
    description:
      "Design a streamlined checkout journey with strong visual feedback and frictionless completion states.",
    techStack: ["Sketch", "Tailwind", "Prototyping"],
    status: "Active",
    priority: "Medium",
    dueDate: "Due 05 Aug",
  },
  {
    id: 3,
    title: "Product Dashboard Revamp",
    description:
      "Refresh analytics views with a more immersive layout, clear hierarchy, and scannable information structure.",
    techStack: ["MUI", "Charts", "Accessibility"],
    status: "Planning",
    priority: "Low",
    dueDate: "Due 10 Aug",
  },
];

const TaskList = () => {
  return (
    <div className="w-full px-1 sm:px-2">
      <div className="space-y-5">
        {taskSamples.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
