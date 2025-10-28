import { describe, it, expect } from "vitest";
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
        disabled: false
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Product visibility");
    expect(webComponent.attributes("name")).toBe("visibility");
  });

  it("passes details prop correctly", async () => {
    const wrapper = mount(Schoicelist, {
      props: {
        details: "Additional context information"
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("details")).toBe("Additional context information");
  });

  it("passes error prop correctly", async () => {
    const wrapper = mount(Schoicelist, {
      props: {
        error: "Please select an option"
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("error")).toBe("Please select an option");
  });

  it("passes labelAccessibilityVisibility prop correctly", async () => {
    const wrapper = mount(Schoicelist, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes multiple prop correctly", async () => {
    const wrapper = mount(Schoicelist, {
      props: {
        multiple: true
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("multiple")).toBeDefined();
  });

  it("passes values array prop correctly", async () => {
    const wrapper = mount(Schoicelist, {
      props: {
        values: ["option1", "option2"]
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("values")).toBeDefined();
  });

  it("emits change event", async () => {
    const wrapper = mount(Schoicelist);
    const webComponent = wrapper.find("s-choicelist");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted()).toHaveProperty("change");
    expect(wrapper.emitted("change")).toHaveLength(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Schoicelist);
    const webComponent = wrapper.find("s-choicelist");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted("input")).toHaveLength(1);
  });

  it("renders with disabled state", async () => {
    const wrapper = mount(Schoicelist, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-choicelist");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });
});
