import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stextfield from "./index.vue";

describe("Stextfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test Label"
      }
    });
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Store name",
        placeholder: "Enter store name",
        value: "Test Store",
        disabled: false,
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Store name");
    expect(webComponent.attributes("placeholder")).toBe("Enter store name");
    expect(webComponent.attributes("value")).toBe("Test Store");
  });

  it("passes autocomplete prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Email",
        autocomplete: "email"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("autocomplete")).toBe("email");
  });

  it("passes icon prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Search",
        icon: "search"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("icon")).toBe("search");
  });

  it("passes error prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Email",
        error: "Email is required"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("error")).toBe("Email is required");
  });

  it("passes prefix and suffix props correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Phone",
        prefix: "+353",
        suffix: "EUR"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("prefix")).toBe("+353");
    expect(webComponent.attributes("suffix")).toBe("EUR");
  });

  it("passes readOnly prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Read only field",
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("read-only")).toBe("true");
  });

  it("passes minLength and maxLength props correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Username",
        minLength: 3,
        maxLength: 20
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("min-length")).toBe("3");
    expect(webComponent.attributes("max-length")).toBe("20");
  });

  it("passes details prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Password",
        details: "Must be at least 8 characters"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("details")).toBe("Must be at least 8 characters");
  });

  it("passes labelAccessibilityVisibility prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Hidden label",
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("renders default slot content", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test"
      },
      slots: {
        default: "Default slot content"
      }
    });
    
    expect(wrapper.text()).toContain("Default slot content");
  });

  it("renders accessory slot content", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test"
      },
      slots: {
        accessory: '<span class="test-accessory">Accessory</span>'
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.html()).toContain("test-accessory");
  });

  it("passes id and name props correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test",
        id: "test-id",
        name: "test-name"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("id")).toBe("test-id");
    expect(webComponent.attributes("name")).toBe("test-name");
  });

  it("passes defaultValue prop correctly", () => {
    const wrapper = mount(Stextfield, {
      props: {
        label: "Test",
        defaultValue: "Default value"
      }
    });
    
    const webComponent = wrapper.find("s-textfield");
    expect(webComponent.attributes("default-value")).toBe("Default value");
  });
});
