import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sthumbnail from "../index.vue";

describe("Sthumbnail", () => {
  it("renders properly", () => {
    const wrapper = mount(Sthumbnail, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.exists()).toBe(true);
  });


});
