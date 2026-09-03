import type { Properties } from "hast";

declare module "mdast" {
  interface Data {
    hProperties?: Properties;
  }
}
