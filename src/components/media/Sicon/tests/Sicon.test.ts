import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sicon from "../index.vue";

describe("Sicon", () => {
  it("renders properly", () => {
    const wrapper = mount(Sicon, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sicon, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.exists()).toBe(true);
  });


});
