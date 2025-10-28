import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sclickable from "../index.vue";

describe("Sclickable", () => {
  it("renders properly", () => {
    const wrapper = mount(Sclickable, {
      slots: {
        default: "Test Content",
      },
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        border: "base",
        padding: "base",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("border")).toBe("base");
    expect(webComponent.attributes("padding")).toBe("base");
  });

  it("passes accessibility props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        accessibilityLabel: "Delete product",
        accessibilityRole: "button",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("accessibility-label")).toBe(
      "Delete product"
    );
    expect(webComponent.attributes("accessibility-role")).toBe("button");
  });

  it("passes background and styling props", () => {
    const wrapper = mount(Sclickable, {
      props: {
        background: "subdued",
        borderRadius: "base",
        borderColor: "strong",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("background")).toBe("subdued");
    expect(webComponent.attributes("border-radius")).toBe("base");
    expect(webComponent.attributes("border-color")).toBe("strong");
  });

  it("passes href and target props for link mode", () => {
    const wrapper = mount(Sclickable, {
      props: {
        href: "https://shopify.com",
        target: "_blank",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("href")).toBe("https://shopify.com");
    expect(webComponent.attributes("target")).toBe("_blank");
  });

  it("passes disabled prop correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        disabled: true,
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("disabled")).toBe("");
  });

  it("passes loading prop correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        loading: true,
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("loading")).toBe("");
  });

  it("passes type prop for form buttons", () => {
    const wrapper = mount(Sclickable, {
      props: {
        type: "submit",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("type")).toBe("submit");
  });

  it("passes command and commandFor props", () => {
    const wrapper = mount(Sclickable, {
      props: {
        command: "--toggle",
        commandFor: "my-element",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("command")).toBe("--toggle");
    expect(webComponent.attributes("command-for")).toBe("my-element");
  });

  it("passes sizing props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        blockSize: "100px",
        inlineSize: "200px",
        maxBlockSize: "300px",
        maxInlineSize: "400px",
        minBlockSize: "50px",
        minInlineSize: "60px",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("block-size")).toBe("100px");
    expect(webComponent.attributes("inline-size")).toBe("200px");
    expect(webComponent.attributes("max-block-size")).toBe("300px");
    expect(webComponent.attributes("max-inline-size")).toBe("400px");
    expect(webComponent.attributes("min-block-size")).toBe("50px");
    expect(webComponent.attributes("min-inline-size")).toBe("60px");
  });

  it("passes padding props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        paddingBlock: "large",
        paddingInline: "base",
        paddingBlockStart: "small",
        paddingBlockEnd: "small-100",
        paddingInlineStart: "large-100",
        paddingInlineEnd: "none",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("padding-block")).toBe("large");
    expect(webComponent.attributes("padding-inline")).toBe("base");
    expect(webComponent.attributes("padding-block-start")).toBe("small");
    expect(webComponent.attributes("padding-block-end")).toBe("small-100");
    expect(webComponent.attributes("padding-inline-start")).toBe("large-100");
    expect(webComponent.attributes("padding-inline-end")).toBe("none");
  });

  it("passes border style props correctly", () => {
    const wrapper = mount(Sclickable, {
      props: {
        borderStyle: "dashed",
        borderWidth: "base",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("border-style")).toBe("dashed");
    expect(webComponent.attributes("border-width")).toBe("base");
  });

  it("passes overflow and display props", () => {
    const wrapper = mount(Sclickable, {
      props: {
        overflow: "hidden",
        display: "auto",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("overflow")).toBe("hidden");
    expect(webComponent.attributes("display")).toBe("auto");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("blur");

    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")).toHaveLength(1);
  });

  it("emits click event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("focus");

    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")).toHaveLength(1);
  });

  it("renders slot content correctly", () => {
    const wrapper = mount(Sclickable, {
      slots: {
        default: "<span>Custom Content</span>",
      },
    });

    expect(wrapper.html()).toContain("<span>Custom Content</span>");
  });

  it("passes download prop for downloadable links", () => {
    const wrapper = mount(Sclickable, {
      props: {
        href: "https://example.com/file.pdf",
        download: "document.pdf",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("download")).toBe("document.pdf");
  });

  it("passes interestFor prop", () => {
    const wrapper = mount(Sclickable, {
      props: {
        interestFor: "target-element",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("interest-for")).toBe("target-element");
  });

  it("passes accessibilityVisibility prop", () => {
    const wrapper = mount(Sclickable, {
      props: {
        accessibilityVisibility: "hidden",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("accessibility-visibility")).toBe("hidden");
  });
});
