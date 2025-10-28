import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Smoneyfield from "../index.vue";

describe("Smoneyfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Smoneyfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Smoneyfield, {
      props: {

      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.exists()).toBe(true);
  });


});
