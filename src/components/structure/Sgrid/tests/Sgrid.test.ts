import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sgrid from "../index.vue";

describe("Sgrid", () => {
  it("renders properly", () => {
    const wrapper = mount(Sgrid, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sgrid, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-grid");
    expect(webComponent.exists()).toBe(true);
  });


});
