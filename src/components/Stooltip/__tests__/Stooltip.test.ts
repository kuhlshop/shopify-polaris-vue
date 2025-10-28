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

  it("renders slot content", () => {
    const wrapper = mount(Stooltip, {
      slots: {
        default: "<s-text>Tooltip text</s-text>"
      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.html()).toContain("Tooltip text");
  });

  it("renders without id prop", () => {
    const wrapper = mount(Stooltip, {
      slots: {
        default: "Tooltip content"
      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.exists()).toBe(true);
  });
});
