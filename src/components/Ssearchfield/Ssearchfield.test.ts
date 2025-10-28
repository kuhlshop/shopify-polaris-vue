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

  it("passes value prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        value: "test value"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("value")).toBe("test value");
  });

  it("passes disabled prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("passes error prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        error: "No results found"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("error")).toBe("No results found");
  });

  it("passes name prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        name: "searchField"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("name")).toBe("searchField");
  });

  it("passes readOnly prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("read-only")).toBeDefined();
  });

  it("passes required prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("passes minLength and maxLength props to the web component", () => {
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

  it("passes autocomplete prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        autocomplete: "off"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes labelAccessibilityVisibility prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes details prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        details: "Additional context"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("details")).toBe("Additional context");
  });

  it("passes defaultValue prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        defaultValue: "default text"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("default-value")).toBe("default text");
  });

  it("passes id prop to the web component", () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        id: "search-field-id"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("id")).toBe("search-field-id");
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
});
