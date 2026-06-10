import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & {
      fill?: boolean;
      priority?: boolean;
      sizes?: string;
    },
  ) => {
    const { alt, fill, priority, sizes, ...imageProps } = props;
    void fill;
    void priority;
    void sizes;

    return React.createElement("img", { alt, ...imageProps });
  },
}));
