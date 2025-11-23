"use client";

import { Margins } from "@/components/ui/Margins";
import { Stack } from "@/components/ui/Stack";
import { FC, useState } from "react";

export const Scrollbars: FC = () => {
  const [scrollbars, setScrollbars] = useState("default");

  return (
    <Margins block="s" data-scrollbars={scrollbars}>
      <Stack>
        <div>
          <div>
            <label>
              <input
                defaultChecked
                name="scrollbars"
                type="radio"
                value="default"
                onChange={(e) => {
                  setScrollbars(e.currentTarget.value);
                }}
              />{" "}
              Pekkiksen vakioimat palkit
            </label>
          </div>
          <div>
            <input
              name="scrollbars"
              type="radio"
              value="thin"
              onChange={(e) => {
                setScrollbars(e.currentTarget.value);
              }}
            />{" "}
            Ohuenlaiset ja pinkit palkit
          </div>
          <div>
            <input
              name="scrollbars"
              type="radio"
              value="brown"
              onChange={(e) => {
                setScrollbars(e.currentTarget.value);
              }}
            />{" "}
            Ruman ruskeat ja stabiilit palkit
          </div>
          <div>
            <input
              name="scrollbars"
              type="radio"
              value="hide"
              onChange={(e) => {
                setScrollbars(e.currentTarget.value);
              }}
            />{" "}
            Piilota palkki kokonaan
          </div>
        </div>
      </Stack>
    </Margins>
  );
};
