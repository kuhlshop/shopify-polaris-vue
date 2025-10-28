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

  it("passes props to the web component", async () => {
    const wrapper = mount(Sunorderedlist, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-unorderedlist");
    expect(webComponent.exists()).toBe(true);
  });


});
