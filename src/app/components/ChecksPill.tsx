"use client";

import { cn } from "@/lib/utils";

interface ChecksPillProps {
  text: string;
  passed: boolean;
}

const ChecksPill = ({ text, passed }: ChecksPillProps) => {
  return (
    <div
      className={cn(
        "border-[0.7px] border-[#7D7D7D] px-3 py-[3px] rounded-3xl text-[11px] font-medium flex items-center gap-1 bg-transparent transition",
        passed && "bg-purple-600 text-white border-purple-600"
      )}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="w-3 h-3 flex-shrink-0"
      >
        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
      </svg>
    </div>
  );
};

export default ChecksPill;
