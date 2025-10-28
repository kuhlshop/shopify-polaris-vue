import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stooltip from "../index.vue";

describe("Stooltip", () => {
  it("renders properly", () => {
    const wrapper = mount(Stooltip, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stooltip, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-tooltip");
    expect(webComponent.exists()).toBe(true);
  });


});
