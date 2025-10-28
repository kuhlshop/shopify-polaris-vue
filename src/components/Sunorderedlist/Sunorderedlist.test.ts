import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sunorderedlist from "./index.vue";

describe("Sunorderedlist", () => {
  it("renders properly", () => {
    const wrapper = mount(Sunorderedlist, {
      slots: {
        default: "<s-list-item>Test Content</s-list-item>"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("renders the web component", () => {
    const wrapper = mount(Sunorderedlist, {
      slots: {
        default: "<s-list-item>Red shirt</s-list-item>"
      }
    });
    
    const webComponent = wrapper.find("s-unorderedlist");
    expect(webComponent.exists()).toBe(true);
  });

  it("renders multiple list items", () => {
    const wrapper = mount(Sunorderedlist, {
      slots: {
        default: `
          <s-list-item>Red shirt</s-list-item>
          <s-list-item>Green shirt</s-list-item>
          <s-list-item>Blue shirt</s-list-item>
        `
      }
    });
    
    expect(wrapper.text()).toContain("Red shirt");
    expect(wrapper.text()).toContain("Green shirt");
    expect(wrapper.text()).toContain("Blue shirt");
  });
});
