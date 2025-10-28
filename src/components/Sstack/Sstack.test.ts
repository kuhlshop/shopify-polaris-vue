import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sstack from "./index.vue";

describe("Sstack", () => {
  it("renders properly", () => {
    const wrapper = mount(Sstack, {
      slots: {
        default: "Test Content",
      },
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sstack, {
      props: {
        gap: "base",
        direction: "inline",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("gap")).toBe("base");
    expect(webComponent.attributes("direction")).toBe("inline");
  });

  it("applies accessibility properties correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        accessibilityLabel: "Test stack",
        accessibilityRole: "navigation",
        accessibilityVisibility: "visible",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("accessibility-label")).toBe("Test stack");
    expect(webComponent.attributes("accessibility-role")).toBe("navigation");
    expect(webComponent.attributes("accessibility-visibility")).toBe("visible");
  });

  it("applies layout properties correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: "large-100",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("justify-content")).toBe("space-between");
    expect(webComponent.attributes("align-items")).toBe("center");
    expect(webComponent.attributes("padding")).toBe("large-100");
  });

  it("applies border properties correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        border: "small base solid",
        borderColor: "strong",
        borderRadius: "large-100",
        borderWidth: "small",
        borderStyle: "dashed",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("border")).toBe("small base solid");
    expect(webComponent.attributes("border-color")).toBe("strong");
    expect(webComponent.attributes("border-radius")).toBe("large-100");
    expect(webComponent.attributes("border-width")).toBe("small");
    expect(webComponent.attributes("border-style")).toBe("dashed");
  });

  it("applies spacing properties correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        gap: "large-100",
        rowGap: "large-300",
        columnGap: "large-200",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("gap")).toBe("large-100");
    expect(webComponent.attributes("row-gap")).toBe("large-300");
    expect(webComponent.attributes("column-gap")).toBe("large-200");
  });

  it("applies size properties correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        inlineSize: "100%",
        blockSize: "200px",
        minInlineSize: "50px",
        maxInlineSize: "500px",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("inline-size")).toBe("100%");
    expect(webComponent.attributes("block-size")).toBe("200px");
    expect(webComponent.attributes("min-inline-size")).toBe("50px");
    expect(webComponent.attributes("max-inline-size")).toBe("500px");
  });

  it("applies padding properties correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        paddingBlock: "large-100",
        paddingInline: "base",
        paddingBlockStart: "small",
        paddingBlockEnd: "large",
        paddingInlineStart: "small-100",
        paddingInlineEnd: "large-200",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("padding-block")).toBe("large-100");
    expect(webComponent.attributes("padding-inline")).toBe("base");
    expect(webComponent.attributes("padding-block-start")).toBe("small");
    expect(webComponent.attributes("padding-block-end")).toBe("large");
    expect(webComponent.attributes("padding-inline-start")).toBe("small-100");
    expect(webComponent.attributes("padding-inline-end")).toBe("large-200");
  });

  it("applies background and overflow properties correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        background: "subdued",
        overflow: "hidden",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("background")).toBe("subdued");
    expect(webComponent.attributes("overflow")).toBe("hidden");
  });

  it("applies display property correctly", async () => {
    const wrapper = mount(Sstack, {
      props: {
        display: "none",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("display")).toBe("none");
  });

  it("renders with responsive properties", async () => {
    const wrapper = mount(Sstack, {
      props: {
        direction: "@container (inline-size > 500px) inline, block",
        gap: "@container (inline-size > 500px) base, small-300",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("direction")).toBe(
      "@container (inline-size > 500px) inline, block"
    );
    expect(webComponent.attributes("gap")).toBe(
      "@container (inline-size > 500px) base, small-300"
    );
  });
});
