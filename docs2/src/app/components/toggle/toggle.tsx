import { useState } from "react";

export const Toggle = ({
  initialChecked = false,
  disabled = false,
  size = "",
}: {
  initialChecked?: boolean;
  disabled?: boolean;
  size?: "" | "toggle-sm";
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  return (
    <label className="flex items-center space-x-sm w-[150px] justify-start cursor-pointer text-nowrap">
      <input
        type="checkbox"
        className={`toggle ${size}`}
        checked={isChecked}
        disabled={disabled}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <span>Am I toggled? {isChecked ? "yes" : "no"}</span>
    </label>
  );
};
