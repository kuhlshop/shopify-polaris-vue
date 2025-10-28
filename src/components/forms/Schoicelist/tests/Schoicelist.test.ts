import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Schoicelist from "../index.vue";

describe("Schoicelist", () => {
  it("renders properly", () => {
    const wrapper = mount(Schoicelist, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Schoicelist, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.exists()).toBe(true);
  });


});
