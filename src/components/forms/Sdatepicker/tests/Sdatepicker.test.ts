import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdatepicker from "../index.vue";

describe("Sdatepicker", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdatepicker, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdatepicker, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-datepicker");
    expect(webComponent.exists()).toBe(true);
  });


});
