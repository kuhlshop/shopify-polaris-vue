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
        type: "strong",
        tone: "success"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("type")).toBe("strong");
    expect(webComponent.attributes("tone")).toBe("success");
  });

  it("renders with accessibilityVisibility prop", () => {
    const wrapper = mount(Stext, {
      props: {
        accessibilityVisibility: "exclusive"
      },
      slots: {
        default: "Hidden from view"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("accessibility-visibility")).toBe("exclusive");
  });

  it("renders with color prop", () => {
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
    expect(webComponent.attributes("font-variant-numeric")).toBe("tabular-nums");
  });

  it("renders with interestFor prop", () => {
    const wrapper = mount(Stext, {
      props: {
        interestFor: "sku-tooltip"
      },
      slots: {
        default: "What is a product SKU?"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("interest-for")).toBe("sku-tooltip");
  });

  it("renders with tone prop", () => {
    const wrapper = mount(Stext, {
      props: {
        tone: "critical"
      },
      slots: {
        default: "Payment failed"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("tone")).toBe("critical");
  });

  it("renders with type prop", () => {
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

  it("renders with multiple props", () => {
    const wrapper = mount(Stext, {
      props: {
        type: "strong",
        tone: "warning",
        color: "subdued"
      },
      slots: {
        default: "Low inventory"
      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.attributes("type")).toBe("strong");
    expect(webComponent.attributes("tone")).toBe("warning");
    expect(webComponent.attributes("color")).toBe("subdued");
  });
});
