import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdropzone from "../index.vue";

describe("Sdropzone", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdropzone, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdropzone, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.exists()).toBe(true);
  });


});
