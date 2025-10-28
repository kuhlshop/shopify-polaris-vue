import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stable from "../index.vue";

describe("Stable", () => {
  it("renders properly", () => {
    const wrapper = mount(Stable, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stable, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.exists()).toBe(true);
  });


});
