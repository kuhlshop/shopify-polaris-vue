import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Semailfield from "./index.vue";

describe("Semailfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Semailfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {
        label: "Email address",
        placeholder: "user@example.com"
      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Email address");
    expect(webComponent.attributes("placeholder")).toBe("user@example.com");
  });

  it("passes value prop to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {
        value: "test@example.com"
      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.attributes("value")).toBe("test@example.com");
  });

  it("passes boolean props to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {
        required: true,
        disabled: true,
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.attributes("required")).toBe("");
    expect(webComponent.attributes("disabled")).toBe("");
    expect(webComponent.attributes("read-only")).toBe("");
  });

  it("passes error and details props to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {
        error: "Invalid email",
        details: "Please enter a valid email address"
      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.attributes("error")).toBe("Invalid email");
    expect(webComponent.attributes("details")).toBe("Please enter a valid email address");
  });

  it("passes length constraints to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {
        minLength: 5,
        maxLength: 100
      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.attributes("min-length")).toBe("5");
    expect(webComponent.attributes("max-length")).toBe("100");
  });

  it("passes autocomplete prop to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {
        autocomplete: "email"
      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.attributes("autocomplete")).toBe("email");
  });

  it("passes labelAccessibilityVisibility prop to the web component", async () => {
    const wrapper = mount(Semailfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-emailfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Semailfield);
    const webComponent = wrapper.find("s-emailfield");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits change event", async () => {
    const wrapper = mount(Semailfield);
    const webComponent = wrapper.find("s-emailfield");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("emits focus event", async () => {
    const wrapper = mount(Semailfield);
    const webComponent = wrapper.find("s-emailfield");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits input event", async () => {
    const wrapper = mount(Semailfield);
    const webComponent = wrapper.find("s-emailfield");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });
});
