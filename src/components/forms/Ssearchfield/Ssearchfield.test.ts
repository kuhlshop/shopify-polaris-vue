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
        placeholder: "Search...",
        name: "search",
        disabled: false
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Search products");
    expect(webComponent.attributes("placeholder")).toBe("Search...");
  });

  it("passes autocomplete prop correctly", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        autocomplete: "off",
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("autocomplete")).toBe("off");
  });

  it("passes boolean props correctly", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        disabled: true,
        readOnly: true,
        required: true,
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("disabled")).toBeDefined();
    expect(webComponent.attributes("read-only")).toBeDefined();
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("passes error prop correctly", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        error: "No results found",
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("error")).toBe("No results found");
  });

  it("passes number props correctly", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        minLength: 3,
        maxLength: 50,
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("min-length")).toBe("3");
    expect(webComponent.attributes("max-length")).toBe("50");
  });

  it("passes value prop correctly", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        value: "test query",
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("value")).toBe("test query");
  });

  it("passes labelAccessibilityVisibility prop correctly", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        labelAccessibilityVisibility: "exclusive",
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("label-accessibility-visibility")).toBe("exclusive");
  });

  it("passes details prop correctly", async () => {
    const wrapper = mount(Ssearchfield, {
      props: {
        details: "Additional guidance text",
        label: "Search"
      }
    });
    
    const webComponent = wrapper.find("s-searchfield");
    expect(webComponent.attributes("details")).toBe("Additional guidance text");
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
    expect(wrapper.emitted("blur")).toHaveLength(1);
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
    expect(wrapper.emitted("change")).toHaveLength(1);
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
    expect(wrapper.emitted("focus")).toHaveLength(1);
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
    expect(wrapper.emitted("input")).toHaveLength(1);
  });
});
