import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbutton from "./index.vue";

describe("Sbutton", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbutton, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbutton, {
      props: {
        variant: "primary",
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("variant")).toBe("primary");
    expect(webComponent.attributes("disabled")).toBe("");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits click event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("passes href prop correctly", () => {
    const wrapper = mount(Sbutton, {
      props: {
        href: "https://example.com"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("href")).toBe("https://example.com");
  });

  it("passes loading state correctly", () => {
    const wrapper = mount(Sbutton, {
      props: {
        loading: true
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("loading")).toBe("");
  });

  it("passes tone prop correctly", () => {
    const wrapper = mount(Sbutton, {
      props: {
        tone: "critical"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("tone")).toBe("critical");
  });

  it("passes icon prop correctly", () => {
    const wrapper = mount(Sbutton, {
      props: {
        icon: "plus"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("icon")).toBe("plus");
  });

  it("passes accessibilityLabel prop correctly", () => {
    const wrapper = mount(Sbutton, {
      props: {
        accessibilityLabel: "Add product"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("accessibilitylabel")).toBe("Add product");
  });
});
