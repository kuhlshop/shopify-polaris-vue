import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbutton from "./index.vue";

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

  it("passes accessibility label prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        accessibilityLabel: "Add product"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("accessibility-label")).toBe("Add product");
  });

  it("passes command props", () => {
    const wrapper = mount(Sbutton, {
      props: {
        command: "--toggle",
        commandFor: "modal-1"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("command")).toBe("--toggle");
    expect(webComponent.attributes("command-for")).toBe("modal-1");
  });

  it("passes loading prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        loading: true
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("loading")).toBeDefined();
  });

  it("passes href and target props", () => {
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

  it("passes icon prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        icon: "plus"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("icon")).toBe("plus");
  });

  it("passes tone prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        tone: "critical"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("tone")).toBe("critical");
  });

  it("passes type prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        type: "submit"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("type")).toBe("submit");
  });

  it("passes download prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        download: "report.csv"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("download")).toBe("report.csv");
  });

  it("passes interestFor prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        interestFor: "selected-products"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("interest-for")).toBe("selected-products");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits click event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("click");
    
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });
});
