import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scolorpicker from "../index.vue";

describe("Scolorpicker", () => {
  it("renders properly", () => {
    const wrapper = mount(Scolorpicker, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-colorpicker");
    expect(webComponent.exists()).toBe(true);
  });


});
