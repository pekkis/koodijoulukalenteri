import { textFieldClass } from "@/components/ui/TextField.css";
import { ComponentProps, FC } from "react";

export const TextField: FC<ComponentProps<"input">> = (props) => {
  return <input className={textFieldClass} type="text" {...props} />;
};
