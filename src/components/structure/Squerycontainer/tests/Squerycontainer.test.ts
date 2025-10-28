import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Squerycontainer from "../index.vue";

describe("Squerycontainer", () => {
  it("renders properly", () => {
    const wrapper = mount(Squerycontainer, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Squerycontainer, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-querycontainer");
    expect(webComponent.exists()).toBe(true);
  });


});
