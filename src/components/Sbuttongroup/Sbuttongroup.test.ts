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
        accessibilityLabel: "Button group actions",
        gap: "base"
      }
    });
    
    const webComponent = wrapper.find("s-buttongroup");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("accessibility-label")).toBe("Button group actions");
    expect(webComponent.attributes("gap")).toBe("base");
  });

  it("renders with gap none", async () => {
    const wrapper = mount(Sbuttongroup, {
      props: {
        gap: "none"
      }
    });
    
    const webComponent = wrapper.find("s-buttongroup");
    expect(webComponent.attributes("gap")).toBe("none");
  });

  it("renders primary-action slot", () => {
    const wrapper = mount(Sbuttongroup, {
      slots: {
        "primary-action": "<button>Save</button>"
      }
    });
    
    expect(wrapper.html()).toContain("Save");
  });

  it("renders secondary-actions slot", () => {
    const wrapper = mount(Sbuttongroup, {
      slots: {
        "secondary-actions": "<button>Cancel</button>"
      }
    });
    
    expect(wrapper.html()).toContain("Cancel");
  });
});
