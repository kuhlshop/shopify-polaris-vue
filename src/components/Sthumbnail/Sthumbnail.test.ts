import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sthumbnail from "../index.vue";

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
        alt: "White sneakers",
        src: "https://cdn.shopify.com/static/images/polaris/thumbnail-wc_src.jpg",
        size: "base"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("alt")).toBe("White sneakers");
    expect(webComponent.attributes("src")).toBe("https://cdn.shopify.com/static/images/polaris/thumbnail-wc_src.jpg");
  });

  it("applies size prop correctly", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {
        size: "large"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.attributes("size")).toBe("large");
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

  it("renders with default alt text", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {
        alt: "Product preview"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.attributes("alt")).toBe("Product preview");
  });

  it("handles empty state without src", async () => {
    const wrapper = mount(Sthumbnail, {
      props: {
        alt: "No image available"
      }
    });
    
    const webComponent = wrapper.find("s-thumbnail");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("src")).toBeUndefined();
  });
});
