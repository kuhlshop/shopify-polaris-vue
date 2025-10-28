import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sstack from "./index.vue";

describe("Sstack", () => {
  it("renders properly", () => {
    const wrapper = mount(Sstack, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sstack, {
      props: {
        gap: "base",
        direction: "inline"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("gap")).toBe("base");
    expect(webComponent.attributes("direction")).toBe("inline");
  });

  it("applies gap prop correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        gap: "large-100"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("gap")).toBe("large-100");
  });

  it("applies direction prop correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        direction: "block"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("direction")).toBe("block");
  });

  it("applies justifyContent prop correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        justifyContent: "space-between"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("justify-content")).toBe("space-between");
  });

  it("applies alignItems prop correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        alignItems: "center"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("align-items")).toBe("center");
  });

  it("applies padding prop correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        padding: "base"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("padding")).toBe("base");
  });

  it("applies overflow prop correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        overflow: "hidden"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("overflow")).toBe("hidden");
  });

  it("applies accessibility props correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        accessibilityLabel: "Stack label",
        accessibilityRole: "section",
        accessibilityVisibility: "visible"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("accessibility-label")).toBe("Stack label");
    expect(webComponent.attributes("accessibility-role")).toBe("section");
    expect(webComponent.attributes("accessibility-visibility")).toBe("visible");
  });

  it("applies border props correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        border: "small base solid",
        borderRadius: "base",
        borderColor: "base"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("border")).toBe("small base solid");
    expect(webComponent.attributes("border-radius")).toBe("base");
    expect(webComponent.attributes("border-color")).toBe("base");
  });

  it("applies responsive gap correctly", () => {
    const wrapper = mount(Sstack, {
      props: {
        gap: "@container (inline-size > 500px) base, small-300"
      }
    });
    
    const webComponent = wrapper.find("s-stack");
    expect(webComponent.attributes("gap")).toBe("@container (inline-size > 500px) base, small-300");
  });

  it("renders with multiple children", () => {
    const wrapper = mount(Sstack, {
      slots: {
        default: '<div>Item 1</div><div>Item 2</div><div>Item 3</div>'
      }
    });
    
    expect(wrapper.html()).toContain("Item 1");
    expect(wrapper.html()).toContain("Item 2");
    expect(wrapper.html()).toContain("Item 3");
  });
});
