import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stext from "../index.vue";

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
        type: "strong",
        tone: "success"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("type")).toBe("strong");
    expect(webComponent.attributes("tone")).toBe("success");
  });

  it("applies accessibility visibility prop", () => {
    const wrapper = mount(Stext, {
      props: {
        accessibilityVisibility: "exclusive"
      },
      slots: {
        default: "Hidden text for screen readers"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("accessibility-visibility")).toBe("exclusive");
  });

  it("applies color prop", () => {
    const wrapper = mount(Stext, {
      props: {
        color: "subdued"
      },
      slots: {
        default: "Subdued text"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("color")).toBe("subdued");
  });

  it("applies dir prop for RTL languages", () => {
    const wrapper = mount(Stext, {
      props: {
        dir: "rtl"
      },
      slots: {
        default: "محتوى النص باللغة العربية"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("dir")).toBe("rtl");
  });

  it("applies fontVariantNumeric prop", () => {
    const wrapper = mount(Stext, {
      props: {
        fontVariantNumeric: "tabular-nums"
      },
      slots: {
        default: "$1,234.56"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("font-variant-numeric")).toBe("tabular-nums");
  });

  it("applies interestFor prop", () => {
    const wrapper = mount(Stext, {
      props: {
        interestFor: "tooltip-id"
      },
      slots: {
        default: "Hover for more info"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("interest-for")).toBe("tooltip-id");
  });

  it("applies multiple props together", () => {
    const wrapper = mount(Stext, {
      props: {
        type: "strong",
        tone: "critical",
        color: "subdued"
      },
      slots: {
        default: "Important message"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("type")).toBe("strong");
    expect(webComponent.attributes("tone")).toBe("critical");
    expect(webComponent.attributes("color")).toBe("subdued");
  });
});
