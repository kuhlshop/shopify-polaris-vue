import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdivider from "../index.vue";

describe("Sdivider", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdivider, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdivider, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.exists()).toBe(true);
  });


});
