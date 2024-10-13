# Pekkis' Christmas Code Calendar

An advent calendar made with Next.js. I have plans to clean this up and
make it truly reusable - an actual CAAS (Calendar as a Service) platform, maybe.
The code calendar of 2024 will be something to behold!

Until that time, it is what it is. I originally forked the codebase from the usual suspect,
my training course materials.

## develop

- `corepack enable`
- `pnpm i`
- `pnpm dev`
- `DEBUG=true pnpm dev` to resolve all hatches openable.
- `NEXT_PUBLIC_NOW=2024-12-01T21:14:40.846+02:00 pnpm dev` to control time offset as minutes from current time.
