import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sselect from "../index.vue";

describe("Sselect", () => {
  it("renders properly", () => {
    const wrapper = mount(Sselect, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.exists()).toBe(true);
  });


});
