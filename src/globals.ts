export {};

declare global {
  interface Window {
    rybbit?: { event: (event: string, props: unknown) => void };
  }
}
