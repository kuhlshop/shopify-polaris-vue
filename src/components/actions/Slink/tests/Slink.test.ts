import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Slink from "../index.vue";

describe("Slink", () => {
  it("renders properly", () => {
    const wrapper = mount(Slink, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Slink, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-link");
    expect(webComponent.exists()).toBe(true);
  });


});
