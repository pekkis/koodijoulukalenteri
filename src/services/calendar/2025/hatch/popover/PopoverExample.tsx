import Button from "@/components/ui/Button";
import { Margins } from "@/components/ui/Margins";
import {
  popoverClass,
  popperClass
} from "@/services/calendar/2025/hatch/popover/PopoverExample.css";
import { FC, useId } from "react";

export const PopoverExample: FC = () => {
  const id = useId();

  return (
    <Margins block="s">
      <div className={popoverClass}>
        <div id={id} className={popperClass} popover="manual">
          Hoo, olen popover blur backdropilla, ankkuroitu namiskaani. Menen pois
          painamalla nappia uudelleen.
        </div>
        <Button popoverTarget={id}>Pop up!</Button>
      </div>
    </Margins>
  );
};
