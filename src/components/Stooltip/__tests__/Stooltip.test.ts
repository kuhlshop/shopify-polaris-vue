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
  });

  it("renders slot content correctly", () => {
    const wrapper = mount(Stooltip, {
      slots: {
        default: "<span>Tooltip content</span>"
      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.html()).toContain("Tooltip content");
  });

  it("forwards id prop to web component", () => {
    const wrapper = mount(Stooltip, {
      props: {
        id: "shipping-tooltip"
      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.attributes("id")).toBe("shipping-tooltip");
  });
});
