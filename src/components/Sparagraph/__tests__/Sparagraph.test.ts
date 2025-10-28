import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sparagraph from "../index.vue";

describe("Sparagraph", () => {
  it("renders properly", () => {
    const wrapper = mount(Sparagraph, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        color: "subdued",
        tone: "success"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes accessibilityVisibility prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        accessibilityVisibility: "hidden"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("accessibilityvisibility")).toBe("hidden");
  });

  it("passes color prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        color: "subdued"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("color")).toBe("subdued");
  });

  it("passes dir prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        dir: "rtl"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("dir")).toBe("rtl");
  });

  it("passes fontVariantNumeric prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        fontVariantNumeric: "tabular-nums"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("fontvariantnumeric")).toBe("tabular-nums");
  });

  it("passes lineClamp prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        lineClamp: 3
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("lineclamp")).toBe("3");
  });

  it("passes tone prop", () => {
    const wrapper = mount(Sparagraph, {
      props: {
        tone: "critical"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("tone")).toBe("critical");
  });
});
