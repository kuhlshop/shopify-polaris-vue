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
        accessibilityLabel: "Button group label",
        gap: "base"
      }
    });
    
    const webComponent = wrapper.find("s-buttongroup");
    expect(webComponent.exists()).toBe(true);
  });

  it("renders with gap set to none", () => {
    const wrapper = mount(Sbuttongroup, {
      props: {
        gap: "none"
      }
    });
    
    const webComponent = wrapper.find("s-buttongroup");
    expect(webComponent.exists()).toBe(true);
  });

  it("renders named slots correctly", () => {
    const wrapper = mount(Sbuttongroup, {
      slots: {
        "primary-action": "<button>Save</button>",
        "secondary-actions": "<button>Cancel</button>"
      }
    });
    
    expect(wrapper.html()).toContain("<button>Save</button>");
    expect(wrapper.html()).toContain("<button>Cancel</button>");
  });
});
