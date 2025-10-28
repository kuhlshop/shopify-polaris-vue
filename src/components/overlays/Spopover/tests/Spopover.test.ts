import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spopover from "../index.vue";

describe("Spopover", () => {
  it("renders properly", () => {
    const wrapper = mount(Spopover, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Spopover, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-popover");
    expect(webComponent.exists()).toBe(true);
  });


});
