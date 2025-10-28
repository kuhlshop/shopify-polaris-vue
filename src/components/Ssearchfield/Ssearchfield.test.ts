import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Ssearchfield from "./index.vue";

describe("Ssearchfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Ssearchfield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search products",
        placeholder: "Search..."
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Search products");
    expect(webComponent.attributes("placeholder")).toBe("Search...");
  });

  it("passes autocomplete prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        autocomplete: "off"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes boolean props correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        disabled: true,
        required: true,
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("disabled")).toBe("true");
    expect(webComponent.attributes("required")).toBe("true");
    expect(webComponent.attributes("read-only")).toBe("true");
  });

  it("passes number props correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        minLength: 3,
        maxLength: 50
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("min-length")).toBe("3");
    expect(webComponent.attributes("max-length")).toBe("50");
  });

  it("passes value prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        value: "test value"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("value")).toBe("test value");
  });

  it("passes error prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        error: "No results found"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("error")).toBe("No results found");
  });

  it("passes labelAccessibilityVisibility prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Ssearchfield);
    const webComponent = wrapper.find("s-searchfield");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Ssearchfield);
    const webComponent = wrapper.find("s-searchfield");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Ssearchfield);
    const webComponent = wrapper.find("s-searchfield");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Ssearchfield);
    const webComponent = wrapper.find("s-searchfield");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("passes details prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        details: "Additional context"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("details")).toBe("Additional context");
  });

  it("passes defaultValue prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        defaultValue: "default search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("default-value")).toBe("default search");
  });

  it("passes id and name props correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        id: "search-field-id",
        name: "search-field-name"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("id")).toBe("search-field-id");
    expect(webComponent.attributes("name")).toBe("search-field-name");
  });
});
