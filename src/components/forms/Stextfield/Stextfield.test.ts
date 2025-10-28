import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Stextfield from "../index.vue";

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

  it("passes autocomplete prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        autocomplete: "off",
        label: "Password"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes disabled prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        disabled: true,
        label: "Disabled Field"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("disabled")).toBe("true");
  });

  it("passes required prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        required: true,
        label: "Required Field"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("required")).toBe("true");
  });

  it("passes error prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        error: "This field is required",
        label: "Email"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("error")).toBe("This field is required");
  });

  it("passes icon prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        icon: "search",
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("icon")).toBe("search");
  });

  it("passes prefix and suffix props to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        prefix: "$",
        suffix: "USD",
        label: "Price"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("prefix")).toBe("$");
    expect(webComponent.attributes("suffix")).toBe("USD");
  });

  it("passes details prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        details: "Enter your full legal name",
        label: "Full Name"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("details")).toBe("Enter your full legal name");
  });

  it("passes readOnly prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        readOnly: true,
        label: "Read Only Field",
        value: "Cannot edit this"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("read-only")).toBe("true");
  });

  it("passes maxLength and minLength props to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        maxLength: 100,
        minLength: 5,
        label: "Description"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("max-length")).toBe("100");
    expect(webComponent.attributes("min-length")).toBe("5");
  });

  it("passes name and id props to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        name: "storeName",
        id: "store-name-field",
        label: "Store Name"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("name")).toBe("storeName");
    expect(webComponent.attributes("id")).toBe("store-name-field");
  });

  it("passes labelAccessibilityVisibility prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        labelAccessibilityVisibility: "exclusive",
        label: "Hidden Label"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes defaultValue prop to the web component", () => {
    const wrapper = mount(Stextfield, {
      props: {
        defaultValue: "Default text",
        label: "Field with default"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("default-value")).toBe("Default text");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test Field"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted()).toHaveProperty("blur");
    expect(wrapper.emitted("blur")).toHaveLength(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test Field"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted()).toHaveProperty("focus");
    expect(wrapper.emitted("focus")).toHaveLength(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test Field"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("input");
    
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted("input")).toHaveLength(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test Field"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("change");
    
    expect(wrapper.emitted()).toHaveProperty("change");
    expect(wrapper.emitted("change")).toHaveLength(1);
  });

  it("renders accessory slot", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Field with accessory"
      },
      slots: {
        accessory: '<button>Click me</button>'
      }
    });
    
    expect(wrapper.html()).toContain('Click me');
  });
});
