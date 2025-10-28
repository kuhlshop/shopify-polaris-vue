import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbanner from "../index.vue";

describe("Sbanner", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbanner, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbanner, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-banner");
    expect(webComponent.exists()).toBe(true);
  });


});
