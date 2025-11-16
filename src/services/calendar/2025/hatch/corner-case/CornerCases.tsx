import { FC } from "react";

import * as styles from "./CornerCases.css";
import { Stack } from "@/components/ui/Stack";
import { Margins } from "@/components/ui/Margins";

export const CornerCases: FC = () => {
  return (
    <Margins block="s">
      <Stack>
        <div className={styles.normal}>Miten tylsät perusreunat? 🤢</div>
        <div className={styles.squircle}>Uuh mitkä squircle-reunat! 😍</div>
        <div className={styles.bevel}>Battlestar Galactica-reunat! 🤖</div>
      </Stack>
    </Margins>
  );
};
