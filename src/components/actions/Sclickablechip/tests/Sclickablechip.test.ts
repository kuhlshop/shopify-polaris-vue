import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sclickablechip from "../index.vue";

describe("Sclickablechip", () => {
  it("renders properly", () => {
    const wrapper = mount(Sclickablechip, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sclickablechip, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-clickablechip");
    expect(webComponent.exists()).toBe(true);
  });


});
