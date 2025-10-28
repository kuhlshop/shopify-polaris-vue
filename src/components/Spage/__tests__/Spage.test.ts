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
        heading: "Product catalog",
        inlineSize: "base"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("heading")).toBe("Product catalog");
    expect(webComponent.attributes("inline-size")).toBe("base");
  });

  it("renders with heading prop", () => {
    const wrapper = mount(Spage, {
      props: {
        heading: "Store settings"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.attributes("heading")).toBe("Store settings");
  });

  it("renders with small inline size", () => {
    const wrapper = mount(Spage, {
      props: {
        inlineSize: "small"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.attributes("inline-size")).toBe("small");
  });

  it("renders with large inline size", () => {
    const wrapper = mount(Spage, {
      props: {
        inlineSize: "large"
      }
    });
    
    const webComponent = wrapper.find("s-page");
    expect(webComponent.attributes("inline-size")).toBe("large");
  });

  it("renders breadcrumb-actions slot", () => {
    const wrapper = mount(Spage, {
      slots: {
        "breadcrumb-actions": "<div>Back</div>"
      }
    });
    
    expect(wrapper.html()).toContain("<div>Back</div>");
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
        aside: "<div>Aside content</div>"
      }
    });
    
    expect(wrapper.html()).toContain("<div>Aside content</div>");
  });

  it("renders all slots together", () => {
    const wrapper = mount(Spage, {
      props: {
        heading: "Test Page",
        inlineSize: "base"
      },
      slots: {
        "breadcrumb-actions": "<div>Back</div>",
        "primary-action": "<button>Save</button>",
        "secondary-actions": "<button>Cancel</button>",
        default: "<div>Main content</div>",
        aside: "<div>Aside content</div>"
      }
    });
    
    expect(wrapper.html()).toContain("<div>Back</div>");
    expect(wrapper.html()).toContain("<button>Save</button>");
    expect(wrapper.html()).toContain("<button>Cancel</button>");
    expect(wrapper.html()).toContain("<div>Main content</div>");
    expect(wrapper.html()).toContain("<div>Aside content</div>");
  });
});
