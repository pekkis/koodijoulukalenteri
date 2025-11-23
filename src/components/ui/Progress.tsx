import { ComponentProps, FC } from "react";
import * as styles from "./Progress.css";

type Props = ComponentProps<"meter">;

const Progress: FC<Props> = ({ ...rest }) => {
  return <meter {...rest} className={styles.progress} />;
};

export default Progress;
