import { FC } from "react";
import * as styles from "./Hatch24.css";
import Hatch from "./Hatch";

const Hatch24: FC = () => {
  return (
    <Hatch number={24} className={styles.hatch24}>
      Paras sisältö
    </Hatch>
  );
};

export default Hatch24;
