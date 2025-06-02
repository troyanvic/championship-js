import React, { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext.ts";

export default function SettingsFieldset({
  type,
  label,
  defaultValue,
  helpText,
  minValue,
}: {
  type: string;
  label: string;
  defaultValue: number;
  helpText: string;
  minValue: number;
}) {
  const [value, setValue] = useState(defaultValue);
  const [isError, setIsError] = useState(false);

  const {
    store: { durations },
    setDurations,
  } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);

    setValue(val);
    setIsError(val < minValue);
  };

  const handleBlur = () => {
    setDurations({
      ...durations,
      [type]: value,
    });
  };

  return (
    <fieldset className="fieldset mb-2">
      <legend className="fieldset-legend text-base text-zinc-800">
        {label}
      </legend>
      <input
        type="number"
        className={`input input-primary bg-primary-content w-full ${isError ? "border-error" : "border-primary"}`}
        placeholder={value.toString()}
        value={value}
        min={minValue}
        onChange={(e) => handleChange(e)}
        onBlur={handleBlur}
      />
      {isError && (
        <p className="label text-error">Minimum value is {minValue}.</p>
      )}
      <p className="label">{helpText}</p>
    </fieldset>
  );
}
