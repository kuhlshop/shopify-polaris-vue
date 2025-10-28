import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Schip from "./index.vue";

describe("Schip", () => {
  it("renders properly", () => {
    const wrapper = mount(Schip, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Schip, {
      props: {
        accessibilityLabel: "Product status indicator",
        color: "base"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("accessibilitylabel")).toBe("Product status indicator");
    expect(webComponent.attributes("color")).toBe("base");
  });

  it("renders with default slot content", () => {
    const wrapper = mount(Schip, {
      slots: {
        default: "Active"
      }
    });
    
    expect(wrapper.text()).toContain("Active");
  });

  it("renders with graphic slot", () => {
    const wrapper = mount(Schip, {
      slots: {
        graphic: '<s-icon type="check" size="small"></s-icon>',
        default: "Verified"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.exists()).toBe(true);
  });

  it("applies subdued color variant", () => {
    const wrapper = mount(Schip, {
      props: {
        color: "subdued"
      },
      slots: {
        default: "Draft"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.attributes("color")).toBe("subdued");
  });

  it("applies strong color variant", () => {
    const wrapper = mount(Schip, {
      props: {
        color: "strong"
      },
      slots: {
        default: "Published"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.attributes("color")).toBe("strong");
  });

  it("sets accessibility label for screen readers", () => {
    const wrapper = mount(Schip, {
      props: {
        accessibilityLabel: "Product category"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.attributes("accessibilitylabel")).toBe("Product category");
  });
});
