import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sheading from "./index.vue";

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

  it("applies accessibilityRole prop", async () => {
    const wrapper = mount(Sheading, {
      props: {
        accessibilityRole: "presentation"
      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.attributes("accessibilityrole")).toBe("presentation");
  });

  it("applies accessibilityVisibility prop", async () => {
    const wrapper = mount(Sheading, {
      props: {
        accessibilityVisibility: "hidden"
      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.attributes("accessibilityvisibility")).toBe("hidden");
  });

  it("applies lineClamp prop", async () => {
    const wrapper = mount(Sheading, {
      props: {
        lineClamp: 3
      }
    });
    
    const webComponent = wrapper.find("s-heading");
    expect(webComponent.attributes("lineclamp")).toBe("3");
  });
});
