export {};

declare global {
  interface Window {
    plausible?: (event: string, props: unknown) => void;
  }
}
