import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sunorderedlist from "../index.vue";

describe("Sunorderedlist", () => {
  it("renders properly", () => {
    const wrapper = mount(Sunorderedlist, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("renders the web component", () => {
    const wrapper = mount(Sunorderedlist, {
      slots: {
        default: "<s-list-item>Item 1</s-list-item>"
      }
    });
    
    const webComponent = wrapper.find("s-unordered-list");
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
    
    expect(wrapper.html()).toContain("s-list-item");
    expect(wrapper.html()).toContain("Red shirt");
    expect(wrapper.html()).toContain("Green shirt");
    expect(wrapper.html()).toContain("Blue shirt");
  });

  it("supports nested list items", () => {
    const wrapper = mount(Sunorderedlist, {
      slots: {
        default: `
          <s-list-item>
            Configure payment settings
            <s-unordered-list>
              <s-list-item>Nested item</s-list-item>
            </s-unordered-list>
          </s-list-item>
        `
      }
    });
    
    expect(wrapper.html()).toContain("Configure payment settings");
    expect(wrapper.html()).toContain("Nested item");
  });
});
