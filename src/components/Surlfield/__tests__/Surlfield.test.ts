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

  it("passes value prop to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        value: "https://shopify.com"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("value")).toBe("https://shopify.com");
  });

  it("passes disabled prop to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("disabled")).toBe("");
  });

  it("passes required prop to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("required")).toBe("");
  });

  it("passes readOnly prop to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("read-only")).toBe("");
  });

  it("passes error prop to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        error: "Please enter a valid URL"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("error")).toBe("Please enter a valid URL");
  });

  it("passes minLength and maxLength props to the web component", async () => {
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

  it("passes autocomplete prop to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        autocomplete: "url"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("autocomplete")).toBe("url");
  });

  it("passes labelAccessibilityVisibility prop to the web component", async () => {
    const wrapper = mount(Surlfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-urlfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Surlfield);
    const webComponent = wrapper.find("s-urlfield");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });
});
