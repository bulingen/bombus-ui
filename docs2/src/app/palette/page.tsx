"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

import { oklch, formatHex, converter } from "culori";
import { generatePalette2 } from "./generate2";
import { generatePalette4 } from "./generate4";
import { generatePalette5 } from "./generate5";
import { red, tailwindPalettes } from "./tailwindPalettes";

// Convert hex to OKLCH
const hexToOklch = (hex: string) => oklch(hex);

// Generate palette shades based on lightness
const generatePalette = (baseHex: string, steps: number): string[] => {
  const baseColor = hexToOklch(baseHex);
  console.log();

  // Predefined lightness values for palette (0.9 for lightest, 0.1 for darkest)
  const lightnessSteps = [0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.15];

  return lightnessSteps.map(
    (lightness) => formatHex({ ...baseColor, l: lightness }) // Adjust only lightness, keep chroma and hue
  );
};

// Example: Generate a palette from a light yellow
// const paletteYellow = generatePalette("#facc15", 9); // HEX for yellow-400
// console.log("Yellow shades:", paletteYellow);

// // Example: Generate a palette from a dark blue
// const paletteBlue = generatePalette("#2563eb", 9); // HEX for blue-600
// console.log("Blue shades:", paletteBlue);
type Method = "method1" | "method2" | "method3" | "method4";
const methods: Method[] = ["method1", "method2", "method3", "method4"];

const RenderShade = ({ color }: { color: string }) => {
  return (
    <div key={color} className="flex space-x-2 text-sm">
      <div
        className="w-[40px] h-[20px] p-2 border border-neutral-300"
        style={{ backgroundColor: color }}
      />
      <div>{color}</div>
    </div>
  );
};

const ShadeList = ({ colors }: { colors: string[] }) => {
  return (
    <div className="flex flex-col space-y-2 mt-8">
      {colors.map((s) => {
        return <RenderShade key={s} color={s} />;
      })}
    </div>
  );
};

const ShadeGenerator = () => {
  const [color, setColor] = useState("#fff");
  const [colorInput, setColorInput] = useState("");
  const [shades, setShades] = useState<string[]>([]);
  const [method, setMethod] = useState<Method>("method1");

  const generateShades = (color: string) => {
    console.log("Generate now", color);
    if (method === "method1") {
      const stuff = generatePalette(color, 10);
      console.log("Got this", stuff);
      setShades(stuff);
    } else if (method === "method2") {
      const stuff = generatePalette2(color);
      console.log("Got this", stuff);
      setShades(stuff);
    } else if (method === "method3") {
      const stuff = generatePalette4(color);
      console.log("got this", stuff);
      setShades(stuff);
    } else if (method === "method4") {
      const stuff = generatePalette5(color);
      console.log("got this", stuff);
      setShades(stuff);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <HexColorPicker color={color} onChange={setColor} />
      <label>
        Insert manually:{" "}
        <input
          type="text"
          className="border border-neutral-200"
          value={colorInput}
          onChange={(e) => {
            setColorInput(e.target.value);
          }}
        />
      </label>
      <button
        className="bg-blue-300"
        onClick={() => {
          setColor(colorInput);
        }}
      >
        Set
      </button>
      <div className="bg-neutral-200">Selected color: {color}</div>
      <div>
        <div>
          <label>
            Select method
            <select
              className="border border-neutral-300"
              value={method}
              onChange={(e) => {
                const newValue = e.target.value as Method;
                if (newValue) {
                  setMethod(() => {
                    return newValue;
                  });
                }
              }}
            >
              {methods.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </label>
        </div>
        <button
          className="border border-neutral-400 p-2"
          onClick={() => {
            generateShades(color);
          }}
        >
          Generate shades using {method}
        </button>
        <div className="flex flex-col space-y-2 mt-8">
          <ShadeList colors={shades} />
        </div>
      </div>
    </div>
  );
};

const TailwindRedShades = () => {
  const [palette, setPalette] = useState<{ name: string; colors: string[] }>(
    tailwindPalettes[0]
  );
  return (
    <div className="mt-[360px]">
      <div>
        <select
          onChange={(e) => {
            const newPaletteName = e.target.value;
            const newPalette = tailwindPalettes.find(
              (p) => p.name === newPaletteName
            );
            if (newPalette) {
              setPalette(newPalette);
            }
          }}
        >
          {tailwindPalettes.map((p) => {
            return <option key={p.name}>{p.name}</option>;
          })}
        </select>
      </div>
      <div>
        <ShadeList colors={palette.colors} />
      </div>
    </div>
  );
};

const PalettePage = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-8 flex space-x-4">
      <ShadeGenerator />
      <ShadeGenerator />
      <ShadeGenerator />
      <ShadeGenerator />
      <TailwindRedShades />
    </div>
  );
};

export default PalettePage;
