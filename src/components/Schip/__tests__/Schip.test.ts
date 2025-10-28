import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Schip from "../index.vue";

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
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.exists()).toBe(true);
    expect(wrapper.text()).toContain("Active");
  });

  it("renders with graphic slot", () => {
    const wrapper = mount(Schip, {
      slots: {
        graphic: '<s-icon type="check" size="small"></s-icon>',
        default: "Verified"
      }
    });
    
    expect(wrapper.html()).toContain('slot="graphic"');
    expect(wrapper.text()).toContain("Verified");
  });

  it("applies color prop correctly", () => {
    const wrapper = mount(Schip, {
      props: {
        color: "strong"
      },
      slots: {
        default: "Important"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.attributes("color")).toBe("strong");
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

  it("applies accessibilityLabel prop", () => {
    const wrapper = mount(Schip, {
      props: {
        accessibilityLabel: "Product category indicator"
      },
      slots: {
        default: "Electronics"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.attributes("accessibilitylabel")).toBe("Product category indicator");
  });

  it("renders without optional props", () => {
    const wrapper = mount(Schip, {
      slots: {
        default: "Basic Chip"
      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.exists()).toBe(true);
    expect(wrapper.text()).toContain("Basic Chip");
  });
});
