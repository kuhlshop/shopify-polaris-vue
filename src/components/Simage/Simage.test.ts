import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Simage from "./index.vue";

describe("Simage", () => {
  it("renders properly", () => {
    const wrapper = mount(Simage, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Simage, {
      props: {
        src: "https://example.com/image.png",
        alt: "Test image",
        aspectRatio: "16/9",
        objectFit: "cover"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("src")).toBe("https://example.com/image.png");
    expect(webComponent.attributes("alt")).toBe("Test image");
  });

  it("applies accessibility role prop", () => {
    const wrapper = mount(Simage, {
      props: {
        accessibilityRole: "presentation"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    expect(webComponent.attributes("accessibility-role")).toBe("presentation");
  });

  it("applies border styling props", () => {
    const wrapper = mount(Simage, {
      props: {
        border: "base strong solid",
        borderRadius: "large",
        borderWidth: "base",
        borderColor: "strong"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    expect(webComponent.attributes("border")).toBe("base strong solid");
    expect(webComponent.attributes("border-radius")).toBe("large");
    expect(webComponent.attributes("border-width")).toBe("base");
    expect(webComponent.attributes("border-color")).toBe("strong");
  });

  it("applies inline size prop", () => {
    const wrapper = mount(Simage, {
      props: {
        inlineSize: "auto"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    expect(webComponent.attributes("inline-size")).toBe("auto");
  });

  it("applies loading prop", () => {
    const wrapper = mount(Simage, {
      props: {
        loading: "lazy"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    expect(webComponent.attributes("loading")).toBe("lazy");
  });

  it("applies srcSet and sizes props", () => {
    const wrapper = mount(Simage, {
      props: {
        srcSet: "image-400.png 400w, image-800.png 800w",
        sizes: "(max-width: 600px) 100vw, 400px"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    expect(webComponent.attributes("src-set")).toBe("image-400.png 400w, image-800.png 800w");
    expect(webComponent.attributes("sizes")).toBe("(max-width: 600px) 100vw, 400px");
  });

  it("emits error event", async () => {
    const wrapper = mount(Simage, {
      props: {
        src: "https://example.com/image.png"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    await webComponent.trigger("error");
    
    expect(wrapper.emitted("error")).toBeTruthy();
    expect(wrapper.emitted("error")?.length).toBe(1);
  });

  it("emits load event", async () => {
    const wrapper = mount(Simage, {
      props: {
        src: "https://example.com/image.png"
      }
    });
    
    const webComponent = wrapper.find("s-image");
    await webComponent.trigger("load");
    
    expect(wrapper.emitted("load")).toBeTruthy();
    expect(wrapper.emitted("load")?.length).toBe(1);
  });
});
