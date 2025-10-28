import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdatefield from "../index.vue";

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
        placeholder: "Select date"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Order date");
    expect(webComponent.attributes("name")).toBe("orderDate");
    expect(webComponent.attributes("placeholder")).toBe("Select date");
  });

  it("passes value prop to the web component", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        value: "2024-03-15",
        label: "Shipping date"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("value")).toBe("2024-03-15");
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
    expect(webComponent.attributes("read-only")).toBeDefined();
  });

  it("passes date restriction props", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        allow: "2024-03-20, 2024-03-22",
        disallow: "2024-03-21",
        allowDays: "monday, tuesday, wednesday",
        disallowDays: "saturday, sunday"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("allow")).toBe("2024-03-20, 2024-03-22");
    expect(webComponent.attributes("disallow")).toBe("2024-03-21");
    expect(webComponent.attributes("allow-days")).toBe("monday, tuesday, wednesday");
    expect(webComponent.attributes("disallow-days")).toBe("saturday, sunday");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("emits invalid event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("invalid");
    
    expect(wrapper.emitted("invalid")).toBeTruthy();
    expect(wrapper.emitted("invalid")?.length).toBe(1);
  });

  it("emits viewchange event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("viewchange");
    
    expect(wrapper.emitted("viewchange")).toBeTruthy();
    expect(wrapper.emitted("viewchange")?.length).toBe(1);
  });

  it("passes error state", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        error: "Event date is required",
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("error")).toBe("Event date is required");
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

  it("passes labelAccessibilityVisibility prop", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes defaultView and view props", async () => {
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

  it("passes details prop", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        details: "Delivery available Monday through Friday only"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("details")).toBe("Delivery available Monday through Friday only");
  });
});
