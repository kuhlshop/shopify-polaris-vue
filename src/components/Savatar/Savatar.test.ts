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
        initials: "JD"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("alt")).toBe("John Doe");
    expect(webComponent.attributes("initials")).toBe("JD");
  });

  it("passes size prop to the web component", async () => {
    const wrapper = mount(Savatar, {
      props: {
        size: "large"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("size")).toBe("large");
  });

  it("passes src prop to the web component", async () => {
    const wrapper = mount(Savatar, {
      props: {
        src: "/profile.jpg"
      }
    });
    
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.attributes("src")).toBe("/profile.jpg");
  });

  it("emits error event", async () => {
    const wrapper = mount(Savatar);
    const webComponent = wrapper.find("s-avatar");
    
    await webComponent.trigger("error");
    
    expect(wrapper.emitted("error")).toBeTruthy();
    expect(wrapper.emitted("error")?.length).toBe(1);
  });

  it("emits load event", async () => {
    const wrapper = mount(Savatar);
    const webComponent = wrapper.find("s-avatar");
    
    await webComponent.trigger("load");
    
    expect(wrapper.emitted("load")).toBeTruthy();
    expect(wrapper.emitted("load")?.length).toBe(1);
  });

  it("renders with all size variations", async () => {
    const sizes = ["small", "small-200", "base", "large", "large-200"];
    
    sizes.forEach(size => {
      const wrapper = mount(Savatar, {
        props: {
          size: size as any,
          alt: "Test User"
        }
      });
      
      const webComponent = wrapper.find("s-avatar");
      expect(webComponent.attributes("size")).toBe(size);
    });
  });

  it("renders without any props", () => {
    const wrapper = mount(Savatar);
    const webComponent = wrapper.find("s-avatar");
    expect(webComponent.exists()).toBe(true);
  });
});
