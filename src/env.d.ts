/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "aos";

interface Window {
  HSStaticMethods: {
    autoInit: () => void;
  };
}
