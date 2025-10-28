import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Snumberfield from "./index.vue";

describe("Snumberfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Snumberfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Snumberfield, {
      props: {
        label: "Quantity",
        value: "10",
        min: 0,
        max: 100,
        step: 5
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Quantity");
    expect(webComponent.attributes("value")).toBe("10");
  });

  it("passes autocomplete prop correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        autocomplete: "off"
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes inputMode prop correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        inputMode: "numeric"
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("input-mode")).toBe("numeric");
  });

  it("passes prefix and suffix props correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        prefix: "$",
        suffix: "CAD"
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("prefix")).toBe("$");
    expect(webComponent.attributes("suffix")).toBe("CAD");
  });

  it("passes boolean props correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        disabled: true,
        required: true,
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("disabled")).toBeDefined();
    expect(webComponent.attributes("required")).toBeDefined();
    expect(webComponent.attributes("read-only")).toBeDefined();
  });

  it("passes details and error props correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        details: "Number of items in stock",
        error: "Invalid value"
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("details")).toBe("Number of items in stock");
    expect(webComponent.attributes("error")).toBe("Invalid value");
  });

  it("passes labelAccessibilityVisibility prop correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Snumberfield);
    const webComponent = wrapper.find("s-numberfield");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Snumberfield);
    const webComponent = wrapper.find("s-numberfield");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Snumberfield);
    const webComponent = wrapper.find("s-numberfield");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Snumberfield);
    const webComponent = wrapper.find("s-numberfield");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("passes placeholder prop correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        placeholder: "Enter quantity"
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("placeholder")).toBe("Enter quantity");
  });

  it("passes name and id props correctly", () => {
    const wrapper = mount(Snumberfield, {
      props: {
        name: "quantity",
        id: "quantity-field"
      }
    });
    
    const webComponent = wrapper.find("s-numberfield");
    expect(webComponent.attributes("name")).toBe("quantity");
    expect(webComponent.attributes("id")).toBe("quantity-field");
  });
});
