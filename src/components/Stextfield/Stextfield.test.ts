import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stextfield from "./index.vue";

describe("Stextfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Stextfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Store name",
        placeholder: "Enter store name",
        value: "Jaded Pixel"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Store name");
    expect(webComponent.attributes("placeholder")).toBe("Enter store name");
    expect(webComponent.attributes("value")).toBe("Jaded Pixel");
  });

  it("forwards all string props correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        autocomplete: "off",
        defaultValue: "default",
        details: "Additional details",
        error: "Error message",
        icon: "search",
        id: "test-id",
        label: "Test Label",
        name: "test-name",
        placeholder: "Test placeholder",
        prefix: "+1",
        suffix: "%",
        value: "test value"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("autocomplete")).toBe("off");
    expect(webComponent.attributes("default-value")).toBe("default");
    expect(webComponent.attributes("details")).toBe("Additional details");
    expect(webComponent.attributes("error")).toBe("Error message");
    expect(webComponent.attributes("icon")).toBe("search");
    expect(webComponent.attributes("id")).toBe("test-id");
    expect(webComponent.attributes("label")).toBe("Test Label");
    expect(webComponent.attributes("name")).toBe("test-name");
    expect(webComponent.attributes("placeholder")).toBe("Test placeholder");
    expect(webComponent.attributes("prefix")).toBe("+1");
    expect(webComponent.attributes("suffix")).toBe("%");
    expect(webComponent.attributes("value")).toBe("test value");
  });

  it("forwards boolean props correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        disabled: true,
        readOnly: true,
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("disabled")).toBe("");
    expect(webComponent.attributes("read-only")).toBe("");
    expect(webComponent.attributes("required")).toBe("");
  });

  it("forwards number props correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        maxLength: 100,
        minLength: 5
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("max-length")).toBe("100");
    expect(webComponent.attributes("min-length")).toBe("5");
  });

  it("forwards labelAccessibilityVisibility prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Stextfield);
    const webComponent = wrapper.find("s-textfield");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Stextfield);
    const webComponent = wrapper.find("s-textfield");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Stextfield);
    const webComponent = wrapper.find("s-textfield");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Stextfield);
    const webComponent = wrapper.find("s-textfield");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("renders default slot content", () => {
    const wrapper = mount(Stextfield, {
      slots: {
        default: "<span>Default slot content</span>"
      }
    });
    
    expect(wrapper.html()).toContain("Default slot content");
  });

  it("renders accessory slot content", () => {
    const wrapper = mount(Stextfield, {
      slots: {
        accessory: "<button>Accessory</button>"
      }
    });
    
    expect(wrapper.html()).toContain("Accessory");
  });
});
