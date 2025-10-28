import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sthumbnail from "./index.vue";

describe("Sthumbnail", () => {
  it("renders properly", () => {
    const wrapper = mount(Sthumbnail, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {
        src: "https://example.com/image.jpg",
        alt: "Test image"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes alt prop correctly", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {
        alt: "Product preview"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.attributes("alt")).toBe("Product preview");
  });

  it("passes size prop correctly", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {
        size: "large"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.attributes("size")).toBe("large");
  });

  it("passes src prop correctly", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {
        src: "https://example.com/image.jpg"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.attributes("src")).toBe("https://example.com/image.jpg");
  });

  it("emits error event", async () => {
    const wrapper = mount(Sthumbnail);
    const webComponent = wrapper.find("s-thumbnail");
    
    await webComponent.trigger("error");
    
    expect(wrapper.emitted("error")).toBeTruthy();
  });

  it("emits load event", async () => {
    const wrapper = mount(Sthumbnail);
    const webComponent = wrapper.find("s-thumbnail");
    
    await webComponent.trigger("load");
    
    expect(wrapper.emitted("load")).toBeTruthy();
  });
});
