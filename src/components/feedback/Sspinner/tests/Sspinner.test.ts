import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sspinner from "../index.vue";

describe("Sspinner", () => {
  it("renders properly", () => {
    const wrapper = mount(Sspinner, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sspinner, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-spinner");
    expect(webComponent.exists()).toBe(true);
  });


});
