import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Smodal from "../index.vue";

describe("Smodal", () => {
  it("renders properly", () => {
    const wrapper = mount(Smodal, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Smodal, {
      props: {
        heading: "Test Modal",
        size: "large"
      }
    });
    
    const webComponent = wrapper.find("s-modal");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("heading")).toBe("Test Modal");
    expect(webComponent.attributes("size")).toBe("large");
  });

  it("passes accessibilityLabel prop to the web component", async () => {
    const wrapper = mount(Smodal, {
      props: {
        accessibilityLabel: "Custom label"
      }
    });
    
    const webComponent = wrapper.find("s-modal");
    expect(webComponent.attributes("accessibility-label")).toBe("Custom label");
  });

  it("passes padding prop to the web component", async () => {
    const wrapper = mount(Smodal, {
      props: {
        padding: "none"
      }
    });
    
    const webComponent = wrapper.find("s-modal");
    expect(webComponent.attributes("padding")).toBe("none");
  });

  it("passes size prop to the web component", async () => {
    const wrapper = mount(Smodal, {
      props: {
        size: "small-100"
      }
    });
    
    const webComponent = wrapper.find("s-modal");
    expect(webComponent.attributes("size")).toBe("small-100");
  });

  it("emits afterhide event", async () => {
    const wrapper = mount(Smodal);
    const webComponent = wrapper.find("s-modal");
    
    await webComponent.trigger("afterhide");
    
    expect(wrapper.emitted("afterhide")).toBeTruthy();
    expect(wrapper.emitted("afterhide")?.length).toBe(1);
  });

  it("emits aftershow event", async () => {
    const wrapper = mount(Smodal);
    const webComponent = wrapper.find("s-modal");
    
    await webComponent.trigger("aftershow");
    
    expect(wrapper.emitted("aftershow")).toBeTruthy();
    expect(wrapper.emitted("aftershow")?.length).toBe(1);
  });

  it("emits hide event", async () => {
    const wrapper = mount(Smodal);
    const webComponent = wrapper.find("s-modal");
    
    await webComponent.trigger("hide");
    
    expect(wrapper.emitted("hide")).toBeTruthy();
    expect(wrapper.emitted("hide")?.length).toBe(1);
  });

  it("emits show event", async () => {
    const wrapper = mount(Smodal);
    const webComponent = wrapper.find("s-modal");
    
    await webComponent.trigger("show");
    
    expect(wrapper.emitted("show")).toBeTruthy();
    expect(wrapper.emitted("show")?.length).toBe(1);
  });

  it("renders primary-action slot", () => {
    const wrapper = mount(Smodal, {
      slots: {
        "primary-action": "<button>Save</button>"
      }
    });
    
    expect(wrapper.html()).toContain("<button>Save</button>");
  });

  it("renders secondary-actions slot", () => {
    const wrapper = mount(Smodal, {
      slots: {
        "secondary-actions": "<button>Cancel</button>"
      }
    });
    
    expect(wrapper.html()).toContain("<button>Cancel</button>");
  });
});
