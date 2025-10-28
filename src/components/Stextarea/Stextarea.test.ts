import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stextarea from "./index.vue";

describe("Stextarea", () => {
  it("renders properly", () => {
    const wrapper = mount(Stextarea, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        label: "Test Label",
        placeholder: "Enter text here",
        rows: 5
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Test Label");
    expect(webComponent.attributes("placeholder")).toBe("Enter text here");
    expect(webComponent.attributes("rows")).toBe("5");
  });

  it("passes autocomplete prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        autocomplete: "off"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes disabled prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("passes error prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        error: "This field is required"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("error")).toBe("This field is required");
  });

  it("passes value prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        value: "Test value"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("value")).toBe("Test value");
  });

  it("passes readOnly prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("read-only")).toBeDefined();
  });

  it("passes required prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("passes maxLength prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        maxLength: 160
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("max-length")).toBe("160");
  });

  it("passes minLength prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        minLength: 20
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("min-length")).toBe("20");
  });

  it("passes details prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        details: "Additional guidance text"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("details")).toBe("Additional guidance text");
  });

  it("passes labelAccessibilityVisibility prop correctly", () => {
    const wrapper = mount(Stextarea, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Stextarea);
    const webComponent = wrapper.find("s-textarea");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Stextarea);
    const webComponent = wrapper.find("s-textarea");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Stextarea);
    const webComponent = wrapper.find("s-textarea");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Stextarea);
    const webComponent = wrapper.find("s-textarea");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });
});
