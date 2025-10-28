import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Savatar from "../index.vue";

describe("Savatar", () => {
  it("renders properly", () => {
    const wrapper = mount(Savatar, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Savatar, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.exists()).toBe(true);
  });


});
