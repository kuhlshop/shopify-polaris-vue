import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Surlfield from "../index.vue";

describe("Surlfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Surlfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.exists()).toBe(true);
  });


});
