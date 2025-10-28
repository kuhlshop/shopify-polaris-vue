import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Ssearchfield from "./index.vue";

describe("Ssearchfield", () => {
  it("renders properly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search"
      },
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
        placeholder: "Search products...",
        name: "search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Search products");
    expect(webComponent.attributes("placeholder")).toBe("Search products...");
    expect(webComponent.attributes("name")).toBe("search");
  });

  it("passes autocomplete prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        autocomplete: "off"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes disabled prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("passes error prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        error: "No results found"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("error")).toBe("No results found");
  });

  it("passes value prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        value: "test value"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("value")).toBe("test value");
  });

  it("passes labelAccessibilityVisibility prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes minLength and maxLength props correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        minLength: 3,
        maxLength: 50
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("min-length")).toBe("3");
    expect(webComponent.attributes("max-length")).toBe("50");
  });

  it("passes readOnly prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("read-only")).toBeDefined();
  });

  it("passes required prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("passes details prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        details: "Additional context"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("details")).toBe("Additional context");
  });

  it("passes id prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        id: "search-field-id"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("id")).toBe("search-field-id");
  });

  it("passes defaultValue prop correctly", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search",
        defaultValue: "default text"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("default-value")).toBe("default text");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });
});
