import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sorderedlist from "../index.vue";

describe("Sorderedlist", () => {
  it("renders properly", () => {
    const wrapper = mount(Sorderedlist, {
      slots: {
        default: "<s-list-item>Test Item 1</s-list-item><s-list-item>Test Item 2</s-list-item>"
      }
    });
    expect(wrapper.html()).toContain("s-orderedlist");
  });

  it("renders the web component", () => {
    const wrapper = mount(Sorderedlist, {
      slots: {
        default: "<s-list-item>Test Content</s-list-item>"
      }
    });
    
    const webComponent = wrapper.find("s-orderedlist");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes slot content to the web component", () => {
    const testContent = "<s-list-item>Red shirt</s-list-item><s-list-item>Blue shirt</s-list-item>";
    const wrapper = mount(Sorderedlist, {
      slots: {
        default: testContent
      }
    });
    
    expect(wrapper.html()).toContain("s-list-item");
  });

  it("supports nested ordered lists", () => {
    const wrapper = mount(Sorderedlist, {
      slots: {
        default: `
          <s-list-item>
            Main item
            <s-orderedlist>
              <s-list-item>Sub item</s-list-item>
            </s-orderedlist>
          </s-list-item>
        `
      }
    });
    
    expect(wrapper.html()).toContain("s-orderedlist");
    expect(wrapper.html()).toContain("s-list-item");
  });
});
