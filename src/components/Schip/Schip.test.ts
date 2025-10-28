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

  it("renders with subdued color variant", () => {
    const wrapper = mount(Schip, {
      props: {
        color: "subdued",
        accessibilityLabel: "Secondary information"
      },
      slots: {
        default: "Draft"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.attributes("color")).toBe("subdued");
    expect(wrapper.text()).toContain("Draft");
  });

  it("renders with strong color variant", () => {
    const wrapper = mount(Schip, {
      props: {
        color: "strong",
        accessibilityLabel: "Important status"
      },
      slots: {
        default: "Verified"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.attributes("color")).toBe("strong");
    expect(wrapper.text()).toContain("Verified");
  });

  it("supports graphic slot for icons", () => {
    const wrapper = mount(Schip, {
      props: {
        accessibilityLabel: "Product category"
      },
      slots: {
        graphic: '<s-icon type="catalog-product" size="small"></s-icon>',
        default: "Electronics"
      }
    });
    
    expect(wrapper.html()).toContain("Electronics");
  });

  it("renders without accessibilityLabel prop", () => {
    const wrapper = mount(Schip, {
      slots: {
        default: "Active"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.exists()).toBe(true);
    expect(wrapper.text()).toContain("Active");
  });
});
