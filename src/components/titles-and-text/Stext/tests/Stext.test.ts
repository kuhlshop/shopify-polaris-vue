import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stext from "../index.vue";

describe("Stext", () => {
  it("renders properly", () => {
    const wrapper = mount(Stext, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stext, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-text");
    expect(webComponent.exists()).toBe(true);
  });


});
