import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scheckbox from "../index.vue";

describe("Scheckbox", () => {
  it("renders properly", () => {
    const wrapper = mount(Scheckbox, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Scheckbox, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });


});
