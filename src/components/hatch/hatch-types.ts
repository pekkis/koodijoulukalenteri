import {
  CalendarType,
  ClientCalendarType,
  HatchConfig
} from "@/services/calendar";
import { ReactNode } from "react";

export type HatchPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type HatchProps = {
  calendar: ClientCalendarType;
  isInteractive?: boolean;
  isOpenable?: boolean;
  day: number;
  position: HatchPosition;
  className?: string;
  children: ReactNode;
  naughtinessIncrease?: number;
  isDark?: boolean;
};

export type InnerHatchProps = {
  calendar: CalendarType;
  hatch: HatchConfig;
};
