import { FC } from "react";

import * as styles from "./CornerCases.css";
import { Stack } from "@/components/ui/Stack";
import { Margins } from "@/components/ui/Margins";
import clsx from "clsx";

export const CornerCases: FC = () => {
  return (
    <Margins block="s" data-epic-corners="si">
      <Stack>
        <div className={clsx(styles.box, styles.normal)}>
          Buu, tylsät perusreunat! 🤢
        </div>
        <div className={clsx(styles.box, styles.squircle)}>
          Uuh, miten seksikkäät squircle-reunat! 😍
        </div>
        <div className={clsx(styles.box, styles.bevel)}>
          Battlestar Galactica-reunat! 🤖
        </div>

        <div className={clsx(styles.box, styles.mixed)}>
          KAIKKI ERI REUNAT! ✨
        </div>
      </Stack>
    </Margins>
  );
};
