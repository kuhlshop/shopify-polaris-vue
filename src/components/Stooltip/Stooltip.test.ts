import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stooltip from "../index.vue";

describe("Stooltip", () => {
  it("renders properly", () => {
    const wrapper = mount(Stooltip, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stooltip, {
      props: {
        id: "test-tooltip"
      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("id")).toBe("test-tooltip");
  });

  it("renders with text content", () => {
    const wrapper = mount(Stooltip, {
      props: {
        id: "bold-tooltip"
      },
      slots: {
        default: "Bold"
      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.exists()).toBe(true);
    expect(wrapper.text()).toContain("Bold");
  });

  it("renders with nested components", () => {
    const wrapper = mount(Stooltip, {
      props: {
        id: "shipping-tooltip"
      },
      slots: {
        default: "<s-text>This order has shipping labels.</s-text>"
      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.exists()).toBe(true);
  });
});
