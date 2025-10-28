import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sparagraph from "../index.vue";

describe("Sparagraph", () => {
  it("renders properly", () => {
    const wrapper = mount(Sparagraph, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        tone: "success",
        color: "base"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("tone")).toBe("success");
    expect(webComponent.attributes("color")).toBe("base");
  });

  it("applies accessibilityVisibility prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        accessibilityVisibility: "exclusive"
      },
      slots: {
        default: "Screen reader only text"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("accessibility-visibility")).toBe("exclusive");
  });

  it("applies lineClamp prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        lineClamp: 2
      },
      slots: {
        default: "This is a long text that should be clamped"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("line-clamp")).toBe("2");
  });

  it("applies dir prop for RTL support", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        dir: "rtl"
      },
      slots: {
        default: "محتوى النص"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("dir")).toBe("rtl");
  });

  it("applies fontVariantNumeric prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        fontVariantNumeric: "tabular-nums"
      },
      slots: {
        default: "Orders: 1,234"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("font-variant-numeric")).toBe("tabular-nums");
  });

  it("applies multiple props together", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        tone: "warning",
        color: "subdued",
        lineClamp: 3
      },
      slots: {
        default: "Warning message"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("tone")).toBe("warning");
    expect(webComponent.attributes("color")).toBe("subdued");
    expect(webComponent.attributes("line-clamp")).toBe("3");
  });
});
