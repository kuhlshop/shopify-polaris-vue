import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Simage from "../index.vue";

describe("Simage", () => {
  it("renders properly", () => {
    const wrapper = mount(Simage, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Simage, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-image");
    expect(webComponent.exists()).toBe(true);
  });


});
