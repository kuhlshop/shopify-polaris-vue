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
        name: "primary-color"
      }
    });
    
    const webComponent = wrapper.find("s-color-picker");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("value")).toBe("#FF0000");
    expect(webComponent.attributes("name")).toBe("primary-color");
  });

  it("passes alpha prop to the web component", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {
        alpha: true
      }
    });
    
    const webComponent = wrapper.find("s-color-picker");
    expect(webComponent.attributes("alpha")).toBeDefined();
  });

  it("passes defaultValue prop to the web component", async () => {
    const wrapper = mount(Scolorpicker, {
      props: {
        defaultValue: "#00FF00"
      }
    });
    
    const webComponent = wrapper.find("s-color-picker");
    expect(webComponent.attributes("default-value")).toBe("#00FF00");
  });

  it("emits change event", async () => {
    const wrapper = mount(Scolorpicker);
    const webComponent = wrapper.find("s-color-picker");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("emits input event", async () => {
    const wrapper = mount(Scolorpicker);
    const webComponent = wrapper.find("s-color-picker");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });
});
