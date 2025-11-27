import { HatchesData } from "@/services/hatch";

import { escapeHatch } from "./hatch/escape/escapeHatch";
import { viewTransitionHatch } from "@/services/calendar/2025/hatch/view-transition/viewTransitionHatch";
import { cornerCaseHatch } from "@/services/calendar/2025/hatch/corner-case/cornerCaseHatch";
import { moviesHatch } from "@/services/calendar/2025/hatch/movies/moviesHatch";
import { steveHatch } from "@/services/calendar/2025/hatch/steve/steveHatch";
import { lookWhosTalkingHatch } from "@/services/calendar/2025/hatch/look-whos-talking/lookWhosTalkingHatch";
import { tightDataHatch } from "@/services/calendar/2025/hatch/tight-data/tightDataHatch";
import { symbolicsHatch } from "@/services/calendar/2025/hatch/symbolics/symbolicsHatch";
import { selfHostHatch } from "@/services/calendar/2025/hatch/self-host/selfHostHatch";
import { colorsHatch } from "@/services/calendar/2025/hatch/colors/colorsHatch";
import { popoverHatch } from "@/services/calendar/2025/hatch/popover/popoverHatch";
import { threedeeHatch } from "@/services/calendar/2025/hatch/threedee/threedeeHatch";
import { modernGitCommandsHatch } from "@/services/calendar/2025/hatch/modern-git-commands/modernGitCommandsHatch";
import { fsmHatch } from "@/services/calendar/2025/hatch/fsm/fsmHatch";
import { firstWebpageHatch } from "@/services/calendar/2025/hatch/first-webpage/firstWebpageHatch";
import { expeditionHatch } from "@/services/calendar/2025/hatch/expedition/expeditionHatch";
import { scrollbarsHatch } from "@/services/calendar/2025/hatch/scrollbars/scrollbarsHatch";
import { chromeHatch } from "@/services/calendar/2025/hatch/chrome/chromeHatch";
import { react19Hatch } from "@/services/calendar/2025/hatch/react19/react19Hatch";
import { viteHatch } from "@/services/calendar/2025/hatch/vite/viteHatch";
import { inertiaHatch } from "@/services/calendar/2025/hatch/inertia/inertiaHatch";
import { promiseHatch } from "@/services/calendar/2025/hatch/promise/promiseHatch";
import { svgHatch } from "@/services/calendar/2025/hatch/svg/svgHatch";
import { cssHatch } from "@/services/calendar/2025/hatch/css/cssHatch";
import { emailHatch } from "@/services/calendar/2025/hatch/email/emailHatch";
import { aiHatch } from "@/services/calendar/2025/hatch/ai/aiHatch";

export const hatches: HatchesData = {
  1: cornerCaseHatch,
  2: moviesHatch,
  3: emailHatch,
  4: viewTransitionHatch,
  5: colorsHatch,
  6: firstWebpageHatch,
  7: popoverHatch,
  8: threedeeHatch,
  9: steveHatch,
  10: modernGitCommandsHatch,
  11: chromeHatch,
  12: scrollbarsHatch,
  13: tightDataHatch,
  14: fsmHatch,
  15: symbolicsHatch,
  16: viteHatch,
  17: cssHatch,
  18: lookWhosTalkingHatch,
  19: react19Hatch,
  20: promiseHatch,
  21: svgHatch,
  22: inertiaHatch,
  23: selfHostHatch,
  24: aiHatch,
  33: expeditionHatch,
  666: escapeHatch
};
