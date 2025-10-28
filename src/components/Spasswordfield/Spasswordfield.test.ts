import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spasswordfield from "../index.vue";

describe("Spasswordfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Spasswordfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        label: "Password",
        placeholder: "Enter your password"
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Password");
    expect(webComponent.attributes("placeholder")).toBe("Enter your password");
  });

  it("passes autocomplete prop correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        autocomplete: "new-password"
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("autocomplete")).toBe("new-password");
  });

  it("passes boolean props correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        disabled: true,
        required: true,
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("disabled")).toBeDefined();
    expect(webComponent.attributes("required")).toBeDefined();
    expect(webComponent.attributes("readonly")).toBeDefined();
  });

  it("passes number props correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        minLength: 8,
        maxLength: 20
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("minlength")).toBe("8");
    expect(webComponent.attributes("maxlength")).toBe("20");
  });

  it("passes error prop correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        error: "Password is required"
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("error")).toBe("Password is required");
  });

  it("passes details prop correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        details: "Must be at least 8 characters long"
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("details")).toBe("Must be at least 8 characters long");
  });

  it("passes labelAccessibilityVisibility prop correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("labelaccessibilityvisibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Spasswordfield);
    const webComponent = wrapper.find("s-passwordfield");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits change event", async () => {
    const wrapper = mount(Spasswordfield);
    const webComponent = wrapper.find("s-passwordfield");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("emits focus event", async () => {
    const wrapper = mount(Spasswordfield);
    const webComponent = wrapper.find("s-passwordfield");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits input event", async () => {
    const wrapper = mount(Spasswordfield);
    const webComponent = wrapper.find("s-passwordfield");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("passes value prop correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        value: "test-password"
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("value")).toBe("test-password");
  });

  it("passes name and id props correctly", async () => {
    const wrapper = mount(Spasswordfield, {
      props: {
        name: "password-field",
        id: "pwd-123"
      }
    });
    
    const webComponent = wrapper.find("s-passwordfield");
    expect(webComponent.attributes("name")).toBe("password-field");
    expect(webComponent.attributes("id")).toBe("pwd-123");
  });
});
