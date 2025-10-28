import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sclickable from "../index.vue";

describe("Sclickable", () => {
  it("renders properly", () => {
    const wrapper = mount(Sclickable, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sclickable, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.exists()).toBe(true);
  });


});
