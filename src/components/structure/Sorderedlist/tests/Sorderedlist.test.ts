import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sorderedlist from "../index.vue";

describe("Sorderedlist", () => {
  it("renders properly", () => {
    const wrapper = mount(Sorderedlist, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sorderedlist, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-orderedlist");
    expect(webComponent.exists()).toBe(true);
  });


});
