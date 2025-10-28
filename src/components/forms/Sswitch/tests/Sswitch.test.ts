import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sswitch from "../index.vue";

describe("Sswitch", () => {
  it("renders properly", () => {
    const wrapper = mount(Sswitch, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sswitch, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-switch");
    expect(webComponent.exists()).toBe(true);
  });


});
