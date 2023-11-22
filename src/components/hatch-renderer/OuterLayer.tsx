"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC, ReactNode } from "react";

type Props = {
  day: number;
  children: ReactNode;
};

const OuterLayer: FC<Props> = ({ day, children }) => {
  const sp = useSearchParams();

  const url = `/hatch/${day}?${sp.toString()}`;

  return <Link href={url}>{children}</Link>;
};

export default OuterLayer;
