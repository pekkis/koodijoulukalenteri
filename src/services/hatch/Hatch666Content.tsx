"use client";

import Button from "@/components/ui/Button";
import useNaughtiness from "@/hooks/useNaughtiness";
import { FC } from "react";

const Hatch666Content: FC = () => {
  const { addNaughtiness } = useNaughtiness();

  return (
    <p>
      <Button
        onClick={() => {
          addNaughtiness(-Infinity);
        }}
      >
        Nöyrry ja ano anteeksiantoa
      </Button>
    </p>
  );
};

export default Hatch666Content;
