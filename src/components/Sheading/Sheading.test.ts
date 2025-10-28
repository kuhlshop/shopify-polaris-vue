import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sheading from "../index.vue";

describe("Sheading", () => {
  it("renders properly", () => {
    const wrapper = mount(Sheading, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sheading, {
      props: {
        accessibilityRole: "presentation",
        lineClamp: 2
      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes accessibilityRole prop correctly", () => {
    const wrapper = mount(Sheading, {
      props: {
        accessibilityRole: "none"
      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.attributes("accessibilityrole")).toBe("none");
  });

  it("passes accessibilityVisibility prop correctly", () => {
    const wrapper = mount(Sheading, {
      props: {
        accessibilityVisibility: "hidden"
      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.attributes("accessibilityvisibility")).toBe("hidden");
  });

  it("passes lineClamp prop correctly", () => {
    const wrapper = mount(Sheading, {
      props: {
        lineClamp: 3
      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.attributes("lineclamp")).toBe("3");
  });
});
