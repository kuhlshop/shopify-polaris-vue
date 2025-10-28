import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbadge from "../index.vue";

describe("Sbadge", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbadge, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbadge, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-badge");
    expect(webComponent.exists()).toBe(true);
  });


});
