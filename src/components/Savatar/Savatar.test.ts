import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Savatar from "./index.vue";

describe("Savatar", () => {
  it("renders properly", () => {
    const wrapper = mount(Savatar, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Savatar, {
      props: {
        alt: "John Doe",
        initials: "JD",
        size: "base",
        src: "/path/to/image.jpg"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("alt")).toBe("John Doe");
    expect(webComponent.attributes("initials")).toBe("JD");
    expect(webComponent.attributes("size")).toBe("base");
    expect(webComponent.attributes("src")).toBe("/path/to/image.jpg");
  });

  it("emits error event", async () => {
    const wrapper = mount(Savatar);
    const webComponent = wrapper.find("s-avatar");
    
    await webComponent.trigger("error");
    
    expect(wrapper.emitted("error")).toBeTruthy();
  });

  it("emits load event", async () => {
    const wrapper = mount(Savatar);
    const webComponent = wrapper.find("s-avatar");
    
    await webComponent.trigger("load");
    
    expect(wrapper.emitted("load")).toBeTruthy();
  });

  it("renders with initials prop", () => {
    const wrapper = mount(Savatar, {
      props: {
        initials: "SC",
        alt: "Sarah Chen"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("initials")).toBe("SC");
    expect(webComponent.attributes("alt")).toBe("Sarah Chen");
  });

  it("renders with different size variations", () => {
    const sizes = ["small", "small-200", "base", "large", "large-200"] as const;
    
    sizes.forEach(size => {
      const wrapper = mount(Savatar, {
        props: { size }
      });
      
      const webComponent = wrapper.find("s-avatar");
      expect(webComponent.attributes("size")).toBe(size);
    });
  });

  it("renders with src prop for image", () => {
    const wrapper = mount(Savatar, {
      props: {
        src: "/customers/profile-123.jpg",
        initials: "MR",
        alt: "Maria Rodriguez"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("src")).toBe("/customers/profile-123.jpg");
  });

  it("renders without any props", () => {
    const wrapper = mount(Savatar);
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.exists()).toBe(true);
  });
});
