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

  it("applies accessibilityVisibility prop correctly", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        accessibilityVisibility: "hidden"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("accessibilityvisibility")).toBe("hidden");
  });

  it("applies color prop correctly", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        color: "subdued"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("color")).toBe("subdued");
  });

  it("applies dir prop correctly", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        dir: "rtl"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("dir")).toBe("rtl");
  });

  it("applies fontVariantNumeric prop correctly", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        fontVariantNumeric: "tabular-nums"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("fontvariantnumeric")).toBe("tabular-nums");
  });

  it("applies lineClamp prop correctly", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        lineClamp: 3
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("lineclamp")).toBe("3");
  });

  it("applies tone prop correctly", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        tone: "warning"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.attributes("tone")).toBe("warning");
  });

  it("renders with multiple props combined", async () => {
    const wrapper = mount(Sparagraph, {
      props: {
        color: "subdued",
        tone: "info",
        lineClamp: 2
      },
      slots: {
        default: "Multi-prop test content"
      }
    });
    
    const webComponent = wrapper.find("s-paragraph");
    expect(webComponent.exists()).toBe(true);
    expect(wrapper.text()).toContain("Multi-prop test content");
  });
});
