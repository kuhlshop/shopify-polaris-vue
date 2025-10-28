import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sparagraph from "../index.vue";

describe("Sparagraph", () => {
  it("renders properly", () => {
    const wrapper = mount(Sparagraph, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sparagraph, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.exists()).toBe(true);
  });


});
