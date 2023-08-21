import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
      bp1:'(max-width: 400px)',
      bp2: '(max-width: 920px)',
      bp3: '(max-width: 1200px)',
    },
});