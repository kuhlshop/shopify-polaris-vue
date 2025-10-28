import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Scheckbox from "./index.vue";

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
    expect(webComponent.attributes("label")).toBe("Test Label");
  });

  it("forwards the change event", async () => {
    const wrapper = mount(Scheckbox);
    const webComponent = wrapper.find("s-checkbox");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("forwards the input event", async () => {
    const wrapper = mount(Scheckbox);
    const webComponent = wrapper.find("s-checkbox");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("passes accessibilityLabel prop", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        accessibilityLabel: "Screen reader label"
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.attributes("accessibility-label")).toBe("Screen reader label");
  });

  it("passes details prop", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        details: "Additional context"
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.attributes("details")).toBe("Additional context");
  });

  it("passes disabled prop", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("passes error prop", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        error: "This field is required"
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.attributes("error")).toBe("This field is required");
  });

  it("passes indeterminate prop", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        indeterminate: true
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.attributes("indeterminate")).toBeDefined();
  });

  it("passes required prop", () => {
    const wrapper = mount(Scheckbox, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-checkbox");
    expect(webComponent.attributes("required")).toBeDefined();
  });
});
