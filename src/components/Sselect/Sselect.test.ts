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
        default: "<s-option value='1'>Test Option</s-option>"
      }
    });
    const webComponent = wrapper.find("s-select");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Sort products by",
        value: "newest",
        placeholder: "Choose an option",
        disabled: false,
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Sort products by");
    expect(webComponent.attributes("value")).toBe("newest");
    expect(webComponent.attributes("placeholder")).toBe("Choose an option");
    expect(webComponent.attributes("required")).toBe("");
  });

  it("passes error prop to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Shipping origin",
        error: "Select your primary shipping location"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("error")).toBe("Select your primary shipping location");
  });

  it("passes icon prop to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Filter orders by",
        icon: "search"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("icon")).toBe("search");
  });

  it("passes details prop to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Product category",
        details: "Additional context for the field"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("details")).toBe("Additional context for the field");
  });

  it("passes labelAccessibilityVisibility prop to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Product type",
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes name and id props to the web component", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Product category",
        name: "category",
        id: "product-category-select"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("name")).toBe("category");
    expect(webComponent.attributes("id")).toBe("product-category-select");
  });

  it("emits change event", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Test Label"
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
        label: "Test Label"
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
        label: "Date range"
      },
      slots: {
        default: `
          <s-option value="1">Today</s-option>
          <s-option value="2">Yesterday</s-option>
        `
      }
    });
    
    expect(wrapper.html()).toContain("<s-option value=\"1\">Today</s-option>");
    expect(wrapper.html()).toContain("<s-option value=\"2\">Yesterday</s-option>");
  });

  it("handles disabled state", async () => {
    const wrapper = mount(Sselect, {
      props: {
        label: "Product type",
        disabled: true,
        value: "physical"
      }
    });
    
    const webComponent = wrapper.find("s-select");
    expect(webComponent.attributes("disabled")).toBe("");
  });
});
