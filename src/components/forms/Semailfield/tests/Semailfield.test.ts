import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Semailfield from "../index.vue";

describe("Semailfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Semailfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.exists()).toBe(true);
  });


});
