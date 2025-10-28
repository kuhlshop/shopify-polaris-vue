import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Snumberfield from "../index.vue";

describe("Snumberfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Snumberfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Snumberfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.exists()).toBe(true);
  });


});
