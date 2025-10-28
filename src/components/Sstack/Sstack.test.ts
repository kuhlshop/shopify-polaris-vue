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

  it("applies accessibility properties", async () => {
    const wrapper = mount(Sstack, {
      props: {
        accessibilityLabel: "Test stack",
        accessibilityRole: "navigation",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("accessibility-label")).toBe("Test stack");
    expect(webComponent.attributes("accessibility-role")).toBe("navigation");
  });

  it("applies layout properties", async () => {
    const wrapper = mount(Sstack, {
      props: {
        justifyContent: "space-between",
        alignItems: "center",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("justify-content")).toBe("space-between");
    expect(webComponent.attributes("align-items")).toBe("center");
  });

  it("applies padding properties", async () => {
    const wrapper = mount(Sstack, {
      props: {
        padding: "large",
        paddingBlock: "small",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("padding")).toBe("large");
    expect(webComponent.attributes("padding-block")).toBe("small");
  });

  it("applies border properties", async () => {
    const wrapper = mount(Sstack, {
      props: {
        border: "small base solid",
        borderRadius: "large",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("border")).toBe("small base solid");
    expect(webComponent.attributes("border-radius")).toBe("large");
  });

  it("applies size properties", async () => {
    const wrapper = mount(Sstack, {
      props: {
        inlineSize: "100px",
        blockSize: "200px",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("inline-size")).toBe("100px");
    expect(webComponent.attributes("block-size")).toBe("200px");
  });

  it("applies gap properties", async () => {
    const wrapper = mount(Sstack, {
      props: {
        gap: "large-100 large-500",
        rowGap: "large-300",
        columnGap: "large-200",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("gap")).toBe("large-100 large-500");
    expect(webComponent.attributes("row-gap")).toBe("large-300");
    expect(webComponent.attributes("column-gap")).toBe("large-200");
  });

  it("applies responsive properties", async () => {
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

  it("applies overflow property", async () => {
    const wrapper = mount(Sstack, {
      props: {
        overflow: "hidden",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("overflow")).toBe("hidden");
  });

  it("applies background property", async () => {
    const wrapper = mount(Sstack, {
      props: {
        background: "base",
      },
    });

    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("background")).toBe("base");
  });
});
