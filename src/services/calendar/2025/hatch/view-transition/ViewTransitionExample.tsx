"use client";

import { Margins } from "@/components/ui/Margins";
import { Stack } from "@/components/ui/Stack";
import { Praat } from "@/services/calendar/2025/hatch/view-transition/Praat";
import { praatsClass } from "@/services/calendar/2025/hatch/view-transition/ViewTransitionExample.css";
import { FC, startTransition, useState, ViewTransition } from "react";

export const ViewTransitionExample: FC = () => {
  const [praats, setPraats] = useState([
    {
      pruut: "Pier",
      color: "rgb(255, 200, 200)"
    },
    {
      pruut: "Paolo",
      color: "rgb(200, 255, 200)"
    },
    {
      pruut: "Pasolini",
      color: "rgb(200, 200, 255)"
    },
    {
      pruut: "Umberto",
      color: "rgb(140, 200, 30)"
    },
    {
      pruut: "Eco",
      color: "rgb(240, 5, 77)"
    }
  ]);

  const remove = (who: string) => {
    startTransition(() => {
      setPraats((prev) => {
        return prev.filter((praat) => praat.pruut !== who);
      });
    });
  };

  const reorder = () => {
    setPraats((prev) => {
      return [...prev.sort(() => Math.random() - 0.5)];
    });
  };

  return (
    <Margins block="s" as="div">
      <Stack>
        <div>
          <button
            onClick={() => {
              startTransition(() => {
                reorder();
              });
            }}
          >
            järjestele
          </button>
        </div>

        <div className={praatsClass}>
          {praats.map((praat) => {
            return <Praat key={praat.pruut} praat={praat} remove={remove} />;
          })}
        </div>
      </Stack>
    </Margins>
  );
};
