import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbuttongroup from "../index.vue";

describe("Sbuttongroup", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbuttongroup, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbuttongroup, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-buttongroup");
    expect(webComponent.exists()).toBe(true);
  });


});
