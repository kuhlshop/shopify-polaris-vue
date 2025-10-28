import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Schoicelist from "../index.vue";

describe("Schoicelist", () => {
  it("renders properly", () => {
    const wrapper = mount(Schoicelist, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Schoicelist, {
      props: {
        label: "Product visibility",
        name: "visibility",
        disabled: false,
        multiple: false
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Product visibility");
    expect(webComponent.attributes("name")).toBe("visibility");
  });

  it("passes details prop correctly", () => {
    const wrapper = mount(Schoicelist, {
      props: {
        details: "Additional context for the field"
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("details")).toBe("Additional context for the field");
  });

  it("passes error prop correctly", () => {
    const wrapper = mount(Schoicelist, {
      props: {
        error: "Please select an option"
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("error")).toBe("Please select an option");
  });

  it("passes labelAccessibilityVisibility prop correctly", () => {
    const wrapper = mount(Schoicelist, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("labelaccessibilityvisibility")).toBe("exclusive");
  });

  it("passes multiple prop correctly", () => {
    const wrapper = mount(Schoicelist, {
      props: {
        multiple: true
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("multiple")).toBe("");
  });

  it("passes values prop correctly", () => {
    const wrapper = mount(Schoicelist, {
      props: {
        values: ["option1", "option2"]
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.element).toBeDefined();
  });

  it("emits change event when triggered", async () => {
    const wrapper = mount(Schoicelist);
    const webComponent = wrapper.find("s-choicelist");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted()).toHaveProperty("change");
    expect(wrapper.emitted("change")).toHaveLength(1);
  });

  it("emits input event when triggered", async () => {
    const wrapper = mount(Schoicelist);
    const webComponent = wrapper.find("s-choicelist");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted("input")).toHaveLength(1);
  });

  it("renders details slot content", () => {
    const wrapper = mount(Schoicelist, {
      slots: {
        details: "<span>Details slot content</span>"
      }
    });
    
    expect(wrapper.html()).toContain("Details slot content");
  });

  it("handles disabled state correctly", () => {
    const wrapper = mount(Schoicelist, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("disabled")).toBe("");
  });

  it("renders with all props", () => {
    const wrapper = mount(Schoicelist, {
      props: {
        details: "Field details",
        disabled: false,
        error: "Error message",
        label: "Field label",
        labelAccessibilityVisibility: "visible",
        multiple: true,
        name: "field-name",
        values: ["value1", "value2"]
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.exists()).toBe(true);
  });
});
