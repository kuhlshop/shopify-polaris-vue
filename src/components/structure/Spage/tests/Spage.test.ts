import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spage from "../index.vue";

describe("Spage", () => {
  it("renders properly", () => {
    const wrapper = mount(Spage, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Spage, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.exists()).toBe(true);
  });


});
