import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbox from "./index.vue";

describe("Sbox", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbox, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbox, {
      props: {
        padding: "base",
        background: "subdued"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("padding")).toBe("base");
    expect(webComponent.attributes("background")).toBe("subdued");
  });

  it("applies border properties correctly", () => {
    const wrapper = mount(Sbox, {
      props: {
        border: "base",
        borderRadius: "base",
        borderColor: "base",
        borderWidth: "base"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("border")).toBe("base");
    expect(webComponent.attributes("border-radius")).toBe("base");
    expect(webComponent.attributes("border-color")).toBe("base");
    expect(webComponent.attributes("border-width")).toBe("base");
  });

  it("applies accessibility properties correctly", () => {
    const wrapper = mount(Sbox, {
      props: {
        accessibilityLabel: "Product information",
        accessibilityRole: "status",
        accessibilityVisibility: "visible"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("accessibility-label")).toBe("Product information");
    expect(webComponent.attributes("accessibility-role")).toBe("status");
    expect(webComponent.attributes("accessibility-visibility")).toBe("visible");
  });

  it("applies size properties correctly", () => {
    const wrapper = mount(Sbox, {
      props: {
        blockSize: "100px",
        inlineSize: "200px",
        minBlockSize: "50px",
        maxBlockSize: "150px"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("block-size")).toBe("100px");
    expect(webComponent.attributes("inline-size")).toBe("200px");
    expect(webComponent.attributes("min-block-size")).toBe("50px");
    expect(webComponent.attributes("max-block-size")).toBe("150px");
  });

  it("applies padding properties correctly", () => {
    const wrapper = mount(Sbox, {
      props: {
        padding: "base",
        paddingBlock: "large",
        paddingInline: "small"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("padding")).toBe("base");
    expect(webComponent.attributes("padding-block")).toBe("large");
    expect(webComponent.attributes("padding-inline")).toBe("small");
  });

  it("applies responsive padding correctly", () => {
    const wrapper = mount(Sbox, {
      props: {
        padding: "@container (inline-size > 400px) base, large-200"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("padding")).toBe("@container (inline-size > 400px) base, large-200");
  });

  it("applies overflow property correctly", () => {
    const wrapper = mount(Sbox, {
      props: {
        overflow: "hidden"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("overflow")).toBe("hidden");
  });

  it("applies display property correctly", () => {
    const wrapper = mount(Sbox, {
      props: {
        display: "none"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("display")).toBe("none");
  });
});
