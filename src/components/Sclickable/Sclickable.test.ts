import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sclickable from "./index.vue";

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
        disabled: true,
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("border")).toBe("base");
    expect(webComponent.attributes("padding")).toBe("base");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("passes accessibility props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        accessibilityLabel: "Delete product",
        accessibilityRole: "button",
        accessibilityVisibility: "visible",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("accessibility-label")).toBe(
      "Delete product"
    );
    expect(webComponent.attributes("accessibility-role")).toBe("button");
    expect(webComponent.attributes("accessibility-visibility")).toBe("visible");
  });

  it("passes styling props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        background: "subdued",
        borderRadius: "base",
        padding: "large",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("background")).toBe("subdued");
    expect(webComponent.attributes("border-radius")).toBe("base");
    expect(webComponent.attributes("padding")).toBe("large");
  });

  it("passes link-related props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        href: "https://shopify.com",
        target: "_blank",
        download: "file.pdf",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("href")).toBe("https://shopify.com");
    expect(webComponent.attributes("target")).toBe("_blank");
    expect(webComponent.attributes("download")).toBe("file.pdf");
  });

  it("passes form-related props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        type: "submit",
        disabled: true,
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("type")).toBe("submit");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("passes size props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        blockSize: "100px",
        inlineSize: "200px",
        minBlockSize: "50px",
        maxInlineSize: "300px",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("block-size")).toBe("100px");
    expect(webComponent.attributes("inline-size")).toBe("200px");
    expect(webComponent.attributes("min-block-size")).toBe("50px");
    expect(webComponent.attributes("max-inline-size")).toBe("300px");
  });

  it("passes border props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        border: "base strong solid",
        borderColor: "subdued",
        borderStyle: "dashed",
        borderWidth: "large",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("border")).toBe("base strong solid");
    expect(webComponent.attributes("border-color")).toBe("subdued");
    expect(webComponent.attributes("border-style")).toBe("dashed");
    expect(webComponent.attributes("border-width")).toBe("large");
  });

  it("passes padding props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        padding: "large",
        paddingBlock: "small",
        paddingInline: "base",
        paddingBlockStart: "large-100",
        paddingBlockEnd: "small-100",
        paddingInlineStart: "base",
        paddingInlineEnd: "none",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("padding")).toBe("large");
    expect(webComponent.attributes("padding-block")).toBe("small");
    expect(webComponent.attributes("padding-inline")).toBe("base");
    expect(webComponent.attributes("padding-block-start")).toBe("large-100");
    expect(webComponent.attributes("padding-block-end")).toBe("small-100");
    expect(webComponent.attributes("padding-inline-start")).toBe("base");
    expect(webComponent.attributes("padding-inline-end")).toBe("none");
  });

  it("passes command props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        command: "--toggle",
        commandFor: "menu-id",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("command")).toBe("--toggle");
    expect(webComponent.attributes("command-for")).toBe("menu-id");
  });

  it("passes display and overflow props correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        display: "none",
        overflow: "hidden",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("display")).toBe("none");
    expect(webComponent.attributes("overflow")).toBe("hidden");
  });

  it("passes loading state correctly", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        loading: true,
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("loading")).toBeDefined();
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("blur");

    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits click event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sclickable);
    const webComponent = wrapper.find("s-clickable");

    await webComponent.trigger("focus");

    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("renders with multiple children", () => {
    const wrapper = mount(Sclickable, {
      slots: {
        default: '<span>Icon</span><span>Text</span>',
      },
    });

    expect(wrapper.html()).toContain("<span>Icon</span>");
    expect(wrapper.html()).toContain("<span>Text</span>");
  });

  it("handles responsive padding values", async () => {
    const wrapper = mount(Sclickable, {
      props: {
        padding: "@container(min-width: 768px) large",
      },
    });

    const webComponent = wrapper.find("s-clickable");
    expect(webComponent.attributes("padding")).toBe(
      "@container(min-width: 768px) large"
    );
  });
});
