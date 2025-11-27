"use client";

import useOpenHatches from "@/hooks/useOpenHatches";
import { useInterval } from "@mantine/hooks";
import { FC } from "react";
import { randomInteger } from "remeda";

export const EvilAi: FC = () => {
  const { toggleHatch } = useOpenHatches();

  const evilToggler = () => {
    const random = randomInteger(1, 24);
    toggleHatch(random);
  };

  useInterval(evilToggler, 5000, { autoInvoke: true });
  useInterval(evilToggler, 7000, { autoInvoke: true });
  useInterval(evilToggler, 11000, { autoInvoke: true });
  useInterval(evilToggler, 13000, { autoInvoke: true });
  useInterval(evilToggler, 17000, { autoInvoke: true });
  useInterval(evilToggler, 19000, { autoInvoke: true });

  return null;
};
