import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Smodal from "../index.vue";

describe("Smodal", () => {
  it("renders properly", () => {
    const wrapper = mount(Smodal, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Smodal, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-modal");
    expect(webComponent.exists()).toBe(true);
  });


});
