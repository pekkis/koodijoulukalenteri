import { Properties } from "csstype";

declare module "csstype" {
  interface Properties {
    cornerShape?: string;
    cornerTopLeftShape?: string;
    cornerTopRightShape?: string;
    cornerBottomLeftShape?: string;
    cornerBottomRightShape?: string;
  }
}
