import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scolorfield from "../index.vue";

describe("Scolorfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Scolorfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Scolorfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-colorfield");
    expect(webComponent.exists()).toBe(true);
  });


});
