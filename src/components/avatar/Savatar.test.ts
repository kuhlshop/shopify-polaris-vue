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
        size: "large",
        src: "/path/to/image.jpg"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("alt")).toBe("John Doe");
    expect(webComponent.attributes("initials")).toBe("JD");
    expect(webComponent.attributes("size")).toBe("large");
    expect(webComponent.attributes("src")).toBe("/path/to/image.jpg");
  });

  it("passes alt prop to the web component", () => {
    const wrapper = mount(Savatar, {
      props: {
        alt: "Sarah Chen"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("alt")).toBe("Sarah Chen");
  });

  it("passes initials prop to the web component", () => {
    const wrapper = mount(Savatar, {
      props: {
        initials: "SC"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("initials")).toBe("SC");
  });

  it("passes size prop to the web component", () => {
    const wrapper = mount(Savatar, {
      props: {
        size: "small-200"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("size")).toBe("small-200");
  });

  it("passes src prop to the web component", () => {
    const wrapper = mount(Savatar, {
      props: {
        src: "/customers/profile-123.jpg"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("src")).toBe("/customers/profile-123.jpg");
  });

  it("emits error event when web component emits error", async () => {
    const wrapper = mount(Savatar, {
      props: {
        src: "/invalid-path.jpg",
        initials: "JD"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    const errorEvent = new Event("error");
    await webComponent.element.dispatchEvent(errorEvent);
    
    expect(wrapper.emitted("error")).toBeTruthy();
    expect(wrapper.emitted("error")?.length).toBe(1);
  });

  it("emits load event when web component emits load", async () => {
    const wrapper = mount(Savatar, {
      props: {
        src: "/valid-path.jpg"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    const loadEvent = new Event("load");
    await webComponent.element.dispatchEvent(loadEvent);
    
    expect(wrapper.emitted("load")).toBeTruthy();
    expect(wrapper.emitted("load")?.length).toBe(1);
  });

  it("renders without props", () => {
    const wrapper = mount(Savatar);
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.exists()).toBe(true);
  });

  it("handles all size variations", () => {
    const sizes: Array<"small" | "small-200" | "base" | "large" | "large-200"> = [
      "small",
      "small-200",
      "base",
      "large",
      "large-200"
    ];

    sizes.forEach(size => {
      const wrapper = mount(Savatar, {
        props: { size }
      });
      
      const webComponent = wrapper.find("s-avatar");
      expect(webComponent.attributes("size")).toBe(size);
    });
  });
});
