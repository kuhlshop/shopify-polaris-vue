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

  it("passes value prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        value: "Test value",
        label: "Description"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("value")).toBe("Test value");
  });

  it("passes disabled prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        disabled: true,
        label: "Disabled field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("disabled")).toBe("true");
  });

  it("passes error prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        error: "This field is required",
        label: "Required field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("error")).toBe("This field is required");
  });

  it("passes details prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        details: "Additional guidance text",
        label: "Field with details"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("details")).toBe("Additional guidance text");
  });

  it("passes required prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        required: true,
        label: "Required field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("required")).toBe("true");
  });

  it("passes readOnly prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        readOnly: true,
        label: "Read-only field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("read-only")).toBe("true");
  });

  it("passes maxLength prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        maxLength: 160,
        label: "Field with max length"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("max-length")).toBe("160");
  });

  it("passes minLength prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        minLength: 20,
        label: "Field with min length"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("min-length")).toBe("20");
  });

  it("passes autocomplete prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        autocomplete: "off",
        label: "Field with autocomplete off"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes labelAccessibilityVisibility prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        labelAccessibilityVisibility: "exclusive",
        label: "Field with hidden label"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes name prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        name: "description",
        label: "Description"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("name")).toBe("description");
  });

  it("passes id prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        id: "custom-id",
        label: "Field with custom ID"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("id")).toBe("custom-id");
  });

  it("passes defaultValue prop to the web component", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        defaultValue: "Default text",
        label: "Field with default"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    expect(webComponent.attributes("default-value")).toBe("Default text");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        label: "Test field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        label: "Test field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        label: "Test field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Stextarea, {
      props: {
        label: "Test field"
      }
    });
    
    const webComponent = wrapper.find("s-textarea");
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });
});
