/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/*
 * Preline v5 exposes these `/non-auto` runtime entries without corresponding
 * declaration mappings. Keep the contracts narrow because the site only uses
 * the APIs declared below.
 */
declare module "@preline/overlay/non-auto" {
  interface HSOverlayElement {
    close(
      forceClose?: boolean,
      callback?: (() => void) | null,
    ): Promise<unknown>;
  }

  interface HSOverlayInstance {
    id: string | number;
    element: HSOverlayElement;
  }

  interface HSOverlayStatic {
    autoInit(): void;
    getInstance(
      target: HTMLElement | string,
      isInstance: true,
    ): HSOverlayInstance | null;
    getInstance(
      target: HTMLElement | string,
      isInstance?: false,
    ): HTMLElement | null;
  }

  const HSOverlay: HSOverlayStatic;

  export default HSOverlay;
}

declare module "@preline/accordion/non-auto" {
  const HSAccordion: { autoInit: () => void };
  export default HSAccordion;
}

declare module "@preline/collapse/non-auto" {
  const HSCollapse: { autoInit: () => void };
  export default HSCollapse;
}

declare module "@preline/tabs/non-auto" {
  const HSTabs: { autoInit: () => void };
  export default HSTabs;
}

declare module "@preline/scrollspy/non-auto" {
  const HSScrollspy: { autoInit: () => void };
  export default HSScrollspy;
}

declare module "@preline/dropdown/non-auto" {
  const HSDropdown: { autoInit: () => void };
  export default HSDropdown;
}
