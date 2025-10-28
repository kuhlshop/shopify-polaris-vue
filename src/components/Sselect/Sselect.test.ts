import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sselect from "./index.vue";

describe("Sselect", () => {
  it("renders properly", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test Label"
      },
      slots: {
        default: "<s-option>Test Content</s-option>"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Product Type",
        placeholder: "Select a product type",
        disabled: false,
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Product Type");
    expect(webComponent.attributes("placeholder")).toBe("Select a product type");
  });

  it("forwards the label prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Shipping Method"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("label")).toBe("Shipping Method");
  });

  it("forwards the value prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Sort by",
        value: "newest"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("value")).toBe("newest");
  });

  it("forwards the disabled prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("forwards the required prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("forwards the error prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        error: "This field is required"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("error")).toBe("This field is required");
  });

  it("forwards the placeholder prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        placeholder: "Choose an option"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("placeholder")).toBe("Choose an option");
  });

  it("forwards the details prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        details: "Additional guidance text"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("details")).toBe("Additional guidance text");
  });

  it("forwards the icon prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        icon: "search"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("icon")).toBe("search");
  });

  it("forwards the name prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        name: "product-type"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("name")).toBe("product-type");
  });

  it("forwards the id prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        id: "select-123"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("id")).toBe("select-123");
  });

  it("forwards the labelAccessibilityVisibility prop", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test",
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits change event", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("renders slot content", () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test"
      },
      slots: {
        default: '<s-option value="1">Option 1</s-option><s-option value="2">Option 2</s-option>'
      }
    });
    
    expect(wrapper.html()).toContain("Option 1");
    expect(wrapper.html()).toContain("Option 2");
  });
});
