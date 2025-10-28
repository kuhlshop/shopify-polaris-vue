import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stextfield from "../index.vue";

describe("Stextfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Stextfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stextfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.exists()).toBe(true);
  });


});
