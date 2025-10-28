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

  it("passes border props correctly", async () => {
    const wrapper = mount(Sbox, {
      props: {
        border: "base",
        borderRadius: "base",
        borderColor: "base"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("border")).toBe("base");
    expect(webComponent.attributes("border-radius")).toBe("base");
    expect(webComponent.attributes("border-color")).toBe("base");
  });

  it("passes accessibility props correctly", async () => {
    const wrapper = mount(Sbox, {
      props: {
        accessibilityRole: "status",
        accessibilityLabel: "Status message",
        accessibilityVisibility: "visible"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("accessibility-role")).toBe("status");
    expect(webComponent.attributes("accessibility-label")).toBe("Status message");
    expect(webComponent.attributes("accessibility-visibility")).toBe("visible");
  });

  it("passes size props correctly", async () => {
    const wrapper = mount(Sbox, {
      props: {
        blockSize: "100px",
        inlineSize: "200px",
        maxBlockSize: "300px",
        minInlineSize: "50px"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("block-size")).toBe("100px");
    expect(webComponent.attributes("inline-size")).toBe("200px");
    expect(webComponent.attributes("max-block-size")).toBe("300px");
    expect(webComponent.attributes("min-inline-size")).toBe("50px");
  });

  it("passes padding shorthand props correctly", async () => {
    const wrapper = mount(Sbox, {
      props: {
        padding: "base large",
        paddingBlock: "small",
        paddingInline: "large small"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("padding")).toBe("base large");
    expect(webComponent.attributes("padding-block")).toBe("small");
    expect(webComponent.attributes("padding-inline")).toBe("large small");
  });

  it("passes specific padding props correctly", async () => {
    const wrapper = mount(Sbox, {
      props: {
        paddingBlockStart: "base",
        paddingBlockEnd: "large",
        paddingInlineStart: "small",
        paddingInlineEnd: "large-100"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("padding-block-start")).toBe("base");
    expect(webComponent.attributes("padding-block-end")).toBe("large");
    expect(webComponent.attributes("padding-inline-start")).toBe("small");
    expect(webComponent.attributes("padding-inline-end")).toBe("large-100");
  });

  it("passes overflow and display props correctly", async () => {
    const wrapper = mount(Sbox, {
      props: {
        overflow: "hidden",
        display: "none"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("overflow")).toBe("hidden");
    expect(webComponent.attributes("display")).toBe("none");
  });

  it("supports responsive padding values", async () => {
    const wrapper = mount(Sbox, {
      props: {
        padding: "@container (inline-size > 400px) base, large-200"
      }
    });
    
    const webComponent = wrapper.find("s-box");
    expect(webComponent.attributes("padding")).toBe("@container (inline-size > 400px) base, large-200");
  });
});
