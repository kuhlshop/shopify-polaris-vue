import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Ssearchfield from "../index.vue";

describe("Ssearchfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Ssearchfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.exists()).toBe(true);
  });


});
