import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbutton from "../index.vue";

describe("Sbutton", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbutton, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbutton, {
      props: {
        variant: "primary",
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("variant")).toBe("primary");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("forwards accessibilityLabel prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        accessibilityLabel: "Add product"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("accessibilitylabel")).toBe("Add product");
  });

  it("forwards command and commandFor props", () => {
    const wrapper = mount(Sbutton, {
      props: {
        command: "--toggle",
        commandFor: "element-id"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("command")).toBe("--toggle");
    expect(webComponent.attributes("commandfor")).toBe("element-id");
  });

  it("forwards href and target props", () => {
    const wrapper = mount(Sbutton, {
      props: {
        href: "https://example.com",
        target: "_blank"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("href")).toBe("https://example.com");
    expect(webComponent.attributes("target")).toBe("_blank");
  });

  it("forwards icon prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        icon: "search"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("icon")).toBe("search");
  });

  it("forwards loading prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        loading: true
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("loading")).toBeDefined();
  });

  it("forwards tone prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        tone: "critical"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("tone")).toBe("critical");
  });

  it("forwards type prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        type: "submit"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("type")).toBe("submit");
  });

  it("forwards download prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        download: "file.csv"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("download")).toBe("file.csv");
  });

  it("forwards interestFor prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        interestFor: "selected-products"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("interestfor")).toBe("selected-products");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")).toHaveLength(1);
  });

  it("emits click event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("click");
    
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")).toHaveLength(1);
  });
});
