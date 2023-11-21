import { FC } from "react";
import * as styles from "./Hatch1.css";
import Hatch from "./Hatch";

const Hatch1: FC = () => {
  return (
    <Hatch number={1} className={styles.hatch1}>
      1
    </Hatch>
  );
};

export default Hatch1;
