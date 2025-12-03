import {
  praatClass,
  pruutClass,
  xClass
} from "@/services/calendar/2025/hatch/view-transition/Praat.css";
import { FC, ViewTransition } from "react";

type Praat = {
  pruut: string;
  color: string;
};

type Props = {
  praat: Praat;
  remove: (who: string) => void;
};

export const Praat: FC<Props> = ({ praat, remove }) => {
  return (
    <ViewTransition>
      <div
        className={praatClass}
        style={{
          backgroundColor: praat.color
        }}
      >
        <div className={pruutClass}>{praat.pruut}</div>
        <div className={xClass}>
          <button
            onClick={() => {
              remove(praat.pruut);
            }}
          >
            x
          </button>
        </div>
      </div>
    </ViewTransition>
  );
};
