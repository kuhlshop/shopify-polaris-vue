import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stextarea from "../index.vue";

describe("Stextarea", () => {
  it("renders properly", () => {
    const wrapper = mount(Stextarea, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.exists()).toBe(true);
  });


});
