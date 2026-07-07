import React from "react";

const TaskCard = () => {
  return (
    <div className="card lg:flex justify-between">
      <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
        <div className="">
          <img
            src="/images/watch.svg"
            alt="watch"
            className="lg:w-[7rem] lg:h-[7rem] object-cover"
          />
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Watch</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {[1, 1, 1, 1].map((item) => (
              <span className="px-5 py-1 rounded-full techStack">Angular</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
