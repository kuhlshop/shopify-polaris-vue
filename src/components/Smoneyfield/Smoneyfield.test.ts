import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Smoneyfield from "./index.vue";

describe("Smoneyfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Smoneyfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        label: "Price",
        value: "19.99",
        min: 0,
        max: 1000
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Price");
    expect(webComponent.attributes("value")).toBe("19.99");
  });

  it("forwards blur event", async () => {
    const wrapper = mount(Smoneyfield);
    const webComponent = wrapper.find("s-moneyfield");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("forwards change event", async () => {
    const wrapper = mount(Smoneyfield);
    const webComponent = wrapper.find("s-moneyfield");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("forwards focus event", async () => {
    const wrapper = mount(Smoneyfield);
    const webComponent = wrapper.find("s-moneyfield");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("forwards input event", async () => {
    const wrapper = mount(Smoneyfield);
    const webComponent = wrapper.find("s-moneyfield");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("applies disabled prop", () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.attributes("disabled")).toBe("true");
  });

  it("applies error prop", () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        error: "Product cost is required"
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.attributes("error")).toBe("Product cost is required");
  });

  it("applies placeholder prop", () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        placeholder: "99.99"
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.attributes("placeholder")).toBe("99.99");
  });

  it("applies details prop", () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        details: "Enter discount amount between $0 and $100"
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.attributes("details")).toBe("Enter discount amount between $0 and $100");
  });

  it("applies labelAccessibilityVisibility prop", () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("applies readOnly prop", () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.attributes("read-only")).toBe("true");
  });

  it("applies required prop", () => {
    const wrapper = mount(Smoneyfield, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-moneyfield");
    expect(webComponent.attributes("required")).toBe("true");
  });
});
