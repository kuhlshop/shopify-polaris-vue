import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spage from "../index.vue";

describe("Spage", () => {
  it("renders properly", () => {
    const wrapper = mount(Spage, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Spage, {
      props: {
        heading: "Products",
        inlineSize: "base"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.exists()).toBe(true);
  });

  it("renders heading prop", () => {
    const wrapper = mount(Spage, {
      props: {
        heading: "Test Heading"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.attributes("heading")).toBe("Test Heading");
  });

  it("renders inlineSize prop", () => {
    const wrapper = mount(Spage, {
      props: {
        inlineSize: "small"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.attributes("inline-size")).toBe("small");
  });

  it("renders named slots", () => {
    const wrapper = mount(Spage, {
      slots: {
        "breadcrumb-actions": "<div>Breadcrumb</div>",
        "primary-action": "<button>Primary</button>",
        "secondary-actions": "<button>Secondary</button>",
        aside: "<div>Aside Content</div>"
      }
    });
    
    expect(wrapper.html()).toContain("Breadcrumb");
    expect(wrapper.html()).toContain("Primary");
    expect(wrapper.html()).toContain("Secondary");
    expect(wrapper.html()).toContain("Aside Content");
  });
});
