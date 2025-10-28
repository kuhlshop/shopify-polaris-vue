import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdatefield from "./index.vue";

describe("Sdatefield", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdatefield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        label: "Order date",
        name: "orderDate",
        placeholder: "Select date",
        value: "2024-03-15"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Order date");
    expect(webComponent.attributes("name")).toBe("orderDate");
  });

  it("passes boolean props correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        disabled: true,
        required: true,
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("disabled")).toBeDefined();
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("passes date restriction props", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        allow: "2024-03-01--2024-03-31",
        disallow: "2024-03-15",
        allowDays: "monday,tuesday,wednesday,thursday,friday",
        disallowDays: "saturday,sunday"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("allow")).toBe("2024-03-01--2024-03-31");
    expect(webComponent.attributes("disallow")).toBe("2024-03-15");
  });

  it("passes autocomplete prop", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        autocomplete: "bday"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("autocomplete")).toBe("bday");
  });

  it("passes label accessibility visibility prop", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits change event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits input event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("emits invalid event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("invalid");
    expect(wrapper.emitted("invalid")).toBeTruthy();
  });

  it("emits viewchange event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("viewchange");
    expect(wrapper.emitted("viewchange")).toBeTruthy();
  });

  it("passes error prop", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        error: "Event date is required"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("error")).toBe("Event date is required");
  });

  it("passes details prop", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        details: "Delivery available Monday through Friday only"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("details")).toBe("Delivery available Monday through Friday only");
  });

  it("passes view and default-view props", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        defaultView: "2025-09",
        view: "2025-10"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("default-view")).toBe("2025-09");
    expect(webComponent.attributes("view")).toBe("2025-10");
  });
});
