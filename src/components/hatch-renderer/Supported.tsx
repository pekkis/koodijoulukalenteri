"use client";

import { supportedClass } from "@/components/hatch-renderer/Supported.css";
import {
  FC,
  startTransition,
  useEffect,
  useState,
  ViewTransition
} from "react";

type Props = {
  supports?: string[];
};

const getSupport = (supports?: string[]) => {
  if (!supports) {
    return true;
  }

  const cssIsSupported =
    supports.length === 1
      ? CSS.supports(supports[0])
      : CSS.supports(supports[0], supports[1]);

  return cssIsSupported;
};

export const Supported: FC<Props> = ({ supports }) => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    startTransition(() => {
      setIsSupported(getSupport(supports));
    });
  }, [supports]);

  if (!isSupported || isSupported) {
    return (
      <ViewTransition>
        <div className={supportedClass}>hihi haha</div>
      </ViewTransition>
    );
  }

  return null;
};
