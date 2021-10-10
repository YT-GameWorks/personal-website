export { cool } from "./dark/cool";
export { pale } from "./dark/pale";
export { bee } from "./light/bee";

import { cool } from "./dark/cool";
import { pale } from "./dark/pale";
import { bee } from "./light/bee";
import { extendTheme } from "@vechaiui/react";

export const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: { cool, pale, bee },
});
