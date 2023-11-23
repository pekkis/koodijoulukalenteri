"use client";

import useOpenHatches from "@/hooks/useOpenHatches";
import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  day: number;
  children: ReactNode;
};

const OuterLayer: FC<Props> = ({ day, children }) => {
  const { searchParams } = useOpenHatches();

  const url = `/hatch/${day}?${searchParams.toString()}`;

  return (
    <Link tabIndex={day * 100 + 10} href={url}>
      {children}
    </Link>
  );
};

export default OuterLayer;
