import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spasswordfield from "../index.vue";

describe("Spasswordfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Spasswordfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.exists()).toBe(true);
  });


});
