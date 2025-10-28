import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Surlfield from "../index.vue";

describe("Surlfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Surlfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        label: "Website URL",
        placeholder: "https://example.com"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Website URL");
    expect(webComponent.attributes("placeholder")).toBe("https://example.com");
  });

  it("passes value prop correctly", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        value: "https://shopify.com"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("value")).toBe("https://shopify.com");
  });

  it("passes disabled prop correctly", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("passes required prop correctly", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("passes readOnly prop correctly", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("read-only")).toBeDefined();
  });

  it("passes error prop correctly", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        error: "Invalid URL"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("error")).toBe("Invalid URL");
  });

  it("passes minLength and maxLength props correctly", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        minLength: 10,
        maxLength: 200
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("min-length")).toBe("10");
    expect(webComponent.attributes("max-length")).toBe("200");
  });

  it("passes details prop correctly", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        details: "Join the partner ecosystem"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("details")).toBe("Join the partner ecosystem");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits change event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("emits focus event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits input event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });
});
