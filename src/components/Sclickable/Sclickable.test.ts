import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sclickable from "./index.vue";

describe("Sclickable", () => {
  it("renders properly", () => {
    const wrapper = mount(Sclickable, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        padding: "base",
        border: "base"
      }
    });
    
    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("padding")).toBe("base");
    expect(webComponent.attributes("border")).toBe("base");
  });

  it("passes accessibility props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        accessibilityLabel: "Delete product",
        accessibilityRole: "generic"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("accessibility-label")).toBe("Delete product");
    expect(webComponent.attributes("accessibility-role")).toBe("generic");
  });

  it("passes background and border styling props", () => {
    const wrapper = mount(Sclickable, {
      props: {
        background: "subdued",
        borderRadius: "base",
        borderColor: "strong"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("background")).toBe("subdued");
    expect(webComponent.attributes("border-radius")).toBe("base");
    expect(webComponent.attributes("border-color")).toBe("strong");
  });

  it("passes size-related props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        blockSize: "100px",
        inlineSize: "200px",
        maxBlockSize: "300px",
        minInlineSize: "50px"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("block-size")).toBe("100px");
    expect(webComponent.attributes("inline-size")).toBe("200px");
    expect(webComponent.attributes("max-block-size")).toBe("300px");
    expect(webComponent.attributes("min-inline-size")).toBe("50px");
  });

  it("passes link-related props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        href: "https://shopify.com",
        target: "_blank",
        download: "file.pdf"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("href")).toBe("https://shopify.com");
    expect(webComponent.attributes("target")).toBe("_blank");
    expect(webComponent.attributes("download")).toBe("file.pdf");
  });

  it("passes button-related props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        type: "submit",
        disabled: true,
        loading: true
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("type")).toBe("submit");
    expect(webComponent.attributes("disabled")).toBe("");
    expect(webComponent.attributes("loading")).toBe("");
  });

  it("passes command props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        command: "--toggle",
        commandFor: "modal-1"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("command")).toBe("--toggle");
    expect(webComponent.attributes("command-for")).toBe("modal-1");
  });

  it("passes padding props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        padding: "large",
        paddingBlock: "small",
        paddingInline: "base"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("padding")).toBe("large");
    expect(webComponent.attributes("padding-block")).toBe("small");
    expect(webComponent.attributes("padding-inline")).toBe("base");
  });

  it("passes overflow and display props", () => {
    const wrapper = mount(Sclickable, {
      props: {
        overflow: "hidden",
        display: "none"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("overflow")).toBe("hidden");
    expect(webComponent.attributes("display")).toBe("none");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("blur");

    expect(wrapper.emitted()).toHaveProperty("blur");
    expect(wrapper.emitted("blur")).toHaveLength(1);
  });

  it("emits click event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("focus");

    expect(wrapper.emitted()).toHaveProperty("focus");
    expect(wrapper.emitted("focus")).toHaveLength(1);
  });

  it("renders slot content correctly", () => {
    const wrapper = mount(Sclickable, {
      slots: {
        default: "<span>Click here</span>"
      }
    });

    expect(wrapper.html()).toContain("<span>Click here</span>");
  });

  it("handles complex padding shorthand", () => {
    const wrapper = mount(Sclickable, {
      props: {
        padding: "large small"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("padding")).toBe("large small");
  });

  it("handles responsive padding values", () => {
    const wrapper = mount(Sclickable, {
      props: {
        padding: "@container(min-width: 500px) large"
      }
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("padding")).toContain("@container");
  });
});
