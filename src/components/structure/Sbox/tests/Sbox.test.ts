import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbox from "../index.vue";

describe("Sbox", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbox, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbox, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.exists()).toBe(true);
  });


});
