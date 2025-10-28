import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Schip from "../index.vue";

describe("Schip", () => {
  it("renders properly", () => {
    const wrapper = mount(Schip, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Schip, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-chip");
    expect(webComponent.exists()).toBe(true);
  });


});
