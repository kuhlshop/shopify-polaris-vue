import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scheckbox from "../index.vue";

describe("Scheckbox", () => {
  it("renders properly", () => {
    const wrapper = mount(Scheckbox, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Scheckbox, {
      props: {
        label: "Test Label",
        checked: true
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });

  it("emits change event", async () => {
    const wrapper = mount(Scheckbox);
    const webComponent = wrapper.find("s-checkbox");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("emits input event", async () => {
    const wrapper = mount(Scheckbox);
    const webComponent = wrapper.find("s-checkbox");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("passes disabled prop correctly", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes error prop correctly", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        error: "Error message"
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes indeterminate prop correctly", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        indeterminate: true
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes details prop correctly", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        details: "Help text"
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes accessibilityLabel prop correctly", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        accessibilityLabel: "Accessible label"
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes required prop correctly", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.exists()).toBe(true);
  });
});
