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
        inlineSize: "large"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("heading")).toBe("Products");
    expect(webComponent.attributes("inline-size")).toBe("large");
  });

  it("renders with heading prop", () => {
    const wrapper = mount(Spage, {
      props: {
        heading: "Product catalog"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.attributes("heading")).toBe("Product catalog");
  });

  it("renders with inlineSize prop", () => {
    const wrapper = mount(Spage, {
      props: {
        inlineSize: "small"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.attributes("inline-size")).toBe("small");
  });

  it("renders breadcrumb-actions slot", () => {
    const wrapper = mount(Spage, {
      slots: {
        "breadcrumb-actions": "<a href='/'>Back</a>"
      }
    });
    
    expect(wrapper.html()).toContain("<a href='/'>Back</a>");
  });

  it("renders primary-action slot", () => {
    const wrapper = mount(Spage, {
      slots: {
        "primary-action": "<button>Save</button>"
      }
    });
    
    expect(wrapper.html()).toContain("<button>Save</button>");
  });

  it("renders secondary-actions slot", () => {
    const wrapper = mount(Spage, {
      slots: {
        "secondary-actions": "<button>Cancel</button>"
      }
    });
    
    expect(wrapper.html()).toContain("<button>Cancel</button>");
  });

  it("renders aside slot", () => {
    const wrapper = mount(Spage, {
      slots: {
        aside: "<div>Sidebar content</div>"
      }
    });
    
    expect(wrapper.html()).toContain("<div>Sidebar content</div>");
  });
});
