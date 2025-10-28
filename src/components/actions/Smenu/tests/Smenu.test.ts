import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Smenu from "../index.vue";

describe("Smenu", () => {
  it("renders properly", () => {
    const wrapper = mount(Smenu, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Smenu, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-menu");
    expect(webComponent.exists()).toBe(true);
  });


});
