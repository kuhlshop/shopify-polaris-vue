import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scolorpicker from "../index.vue";

describe("Scolorpicker", () => {
  it("renders properly", () => {
    const wrapper = mount(Scolorpicker, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {
        value: "#FF0000",
        alpha: true
      }
    });
    
    const webComponent = wrapper.find("s-colorpicker");
    expect(webComponent.exists()).toBe(true);
  });

  it("forwards change event", async () => {
    const wrapper = mount(Scolorpicker);
    const webComponent = wrapper.find("s-colorpicker");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("forwards input event", async () => {
    const wrapper = mount(Scolorpicker);
    const webComponent = wrapper.find("s-colorpicker");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("passes alpha prop correctly", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {
        alpha: true
      }
    });
    
    const webComponent = wrapper.find("s-colorpicker");
    expect(webComponent.attributes("alpha")).toBeDefined();
  });

  it("passes name prop correctly", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {
        name: "primary-color"
      }
    });
    
    const webComponent = wrapper.find("s-colorpicker");
    expect(webComponent.attributes("name")).toBe("primary-color");
  });

  it("passes value prop correctly", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {
        value: "#FF0000"
      }
    });
    
    const webComponent = wrapper.find("s-colorpicker");
    expect(webComponent.attributes("value")).toBe("#FF0000");
  });

  it("passes defaultValue prop correctly", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {
        defaultValue: "#00FF00"
      }
    });
    
    const webComponent = wrapper.find("s-colorpicker");
    expect(webComponent.attributes("default-value")).toBe("#00FF00");
  });
});
