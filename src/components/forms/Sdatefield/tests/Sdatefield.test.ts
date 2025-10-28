import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdatefield from "../index.vue";

describe("Sdatefield", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdatefield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdatefield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.exists()).toBe(true);
  });


});
