"use client";

import { ReactNode, useState } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-[500px] py-xl px-md flex items-center justify-center space-x-2 bg-page">
      {children}
    </div>
  );
};

const Toggle = ({
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

const Toggles = () => {
  return (
    <div>
      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4">
          <Toggle />
          <Toggle disabled initialChecked />
          <Toggle disabled initialChecked={false} />
        </div>
        <div>
          <Toggle size="toggle-sm" />
          <Toggle size="toggle-sm" disabled initialChecked />
          <Toggle size="toggle-sm" disabled initialChecked={false} />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col">
      <div data-theme="light">
        <Container>
          <Toggles />
        </Container>
      </div>
      <div data-theme="dark">
        <Container>
          <Toggles />
        </Container>
      </div>
      <div data-theme="christmas">
        <Container>
          <Toggles />
        </Container>
      </div>
    </div>
  );
};

export default Page;
