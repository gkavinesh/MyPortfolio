import React from "react";

const ResumeCard = ({ badge, title, subTitle, des }) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      {badge === "1" ? (
        <h6 className="w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
          2024-Present
        </h6>
      ) : (
        <h6 >
        </h6>
      )}
      {badge === "2" ? (
        <h6 className="w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
          2023-Present
        </h6>
      ) : (
        <h6>
        </h6>
      )}
      <h2 className="text-lg font-titleFont text-gray-200 font-medium">
        {title}
      </h2>
      <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
      <p className="text-base text-[#999] font-medium pr-10">{des}</p>
    </div>
  );
};

export default ResumeCard;
