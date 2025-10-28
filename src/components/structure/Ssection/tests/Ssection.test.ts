import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Ssection from "../index.vue";

describe("Ssection", () => {
  it("renders properly", () => {
    const wrapper = mount(Ssection, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Ssection, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-section");
    expect(webComponent.exists()).toBe(true);
  });


});
