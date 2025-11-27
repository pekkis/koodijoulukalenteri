import {
  CalendarType,
  getClientCalendar,
  HatchConfig
} from "@/services/calendar";
import { isHatchOpenable } from "@/services/time";
import { FC } from "react";

type Props = {
  calendar: CalendarType;
  config: HatchConfig;
  isInteractive?: boolean;
};

const getHatchComponent = async (
  calendar: CalendarType,
  config: HatchConfig
) => {
  if (config.hatchComponent) {
    return await config.hatchComponent();
  }

  if (calendar.defaultHatchComponent) {
    return await calendar.defaultHatchComponent();
  }

  const Hatch = await import("../hatch/Hatch");
  return Hatch.default;
};

const getInnerHatchComponent = async (
  calendar: CalendarType,
  config: HatchConfig
) => {
  if (config.innerHatchComponent) {
    return await config.innerHatchComponent();
  }

  if (calendar.defaultInnerHatchComponent) {
    return await calendar.defaultInnerHatchComponent();
  }

  const CalendarWall = await import("../hatch/CalendarWall");
  return CalendarWall.default;
};

export const CalendarHatch: FC<Props> = async ({
  calendar,
  config,
  isInteractive
}) => {
  const { day, position } = config;

  const HatchComponent = await getHatchComponent(calendar, config);

  const InnerHatchComponent = await getInnerHatchComponent(calendar, config);

  const clientCalendar = getClientCalendar(calendar);

  return (
    <HatchComponent
      isInteractive={isInteractive}
      calendar={clientCalendar}
      key={config.day}
      isOpenable={isHatchOpenable(config)}
      day={day}
      position={position}
    >
      <InnerHatchComponent calendar={calendar} hatch={config} />
    </HatchComponent>
  );
};
