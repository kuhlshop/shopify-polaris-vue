import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stext from "./index.vue";

describe("Stext", () => {
  it("renders properly", () => {
    const wrapper = mount(Stext, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stext, {
      props: {
        color: "subdued",
        type: "strong"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("color")).toBe("subdued");
    expect(webComponent.attributes("type")).toBe("strong");
  });

  it("renders with accessibilityVisibility prop", () => {
    const wrapper = mount(Stext, {
      props: {
        accessibilityVisibility: "exclusive"
      },
      slots: {
        default: "Accessible text"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("accessibilityvisibility")).toBe("exclusive");
  });

  it("renders with dir prop", () => {
    const wrapper = mount(Stext, {
      props: {
        dir: "rtl"
      },
      slots: {
        default: "محتوى النص"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("dir")).toBe("rtl");
  });

  it("renders with fontVariantNumeric prop", () => {
    const wrapper = mount(Stext, {
      props: {
        fontVariantNumeric: "tabular-nums"
      },
      slots: {
        default: "$1,234.56"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("fontvariantnumeric")).toBe("tabular-nums");
  });

  it("renders with interestFor prop", () => {
    const wrapper = mount(Stext, {
      props: {
        interestFor: "tooltip-id"
      },
      slots: {
        default: "Hover me"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("interestfor")).toBe("tooltip-id");
  });

  it("renders with tone prop", () => {
    const wrapper = mount(Stext, {
      props: {
        tone: "critical"
      },
      slots: {
        default: "Error message"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("tone")).toBe("critical");
  });

  it("renders with type address", () => {
    const wrapper = mount(Stext, {
      props: {
        type: "address"
      },
      slots: {
        default: "123 Commerce Street"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("type")).toBe("address");
  });
});
