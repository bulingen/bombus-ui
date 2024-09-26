"use client";

import { useState } from "react";
import {
  FullThemeHex,
  ThisIsTheThemeWeNeed,
} from "../../../../tw-plugin/src/themes/types";
import { AllButtons } from "../components/buttons/page";
import { Toggles } from "../components/toggle/page";
import { AlertsDemo } from "../components/alerts/page";

const themes = ["light", "dark", "christmas", "christmas2", "light2"] as const;

type Theme = (typeof themes)[number];
const Demo = ({ theme }: { theme: Theme }) => {
  return (
    <div data-theme={theme}>
      <div className="bg-page border p-lg rounded-lg flex flex-col gap-y-xl">
        <AllButtons />
        <Toggles />
        <AlertsDemo />
      </div>
    </div>
  );
};

const Page = () => {
  const [currentThemeId, setCurrentThemeId] = useState<Theme>("light");
  const [currentTheme, setCurrentTheme] = useState<FullThemeHex>();
  const [userTheme, setUserTheme] = useState<ThisIsTheThemeWeNeed>();

  return (
    <div className="mx-auto max-w-[800px] pt-lg px-md">
      <div className="mb-lg">
        <label>
          <span className="mr-md">Select theme</span>
          <select
            onChange={(e) => {
              setCurrentThemeId(e.target.value as Theme);
            }}
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="">
        <Demo theme={currentThemeId} />
      </div>
    </div>
  );
};

export default Page;
