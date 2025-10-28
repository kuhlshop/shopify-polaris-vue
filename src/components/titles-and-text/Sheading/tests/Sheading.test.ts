import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sheading from "../index.vue";

describe("Sheading", () => {
  it("renders properly", () => {
    const wrapper = mount(Sheading, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sheading, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.exists()).toBe(true);
  });


});
