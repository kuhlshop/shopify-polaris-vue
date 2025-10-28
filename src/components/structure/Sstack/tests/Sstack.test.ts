import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sstack from "../index.vue";

describe("Sstack", () => {
  it("renders properly", () => {
    const wrapper = mount(Sstack, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sstack, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.exists()).toBe(true);
  });


});
