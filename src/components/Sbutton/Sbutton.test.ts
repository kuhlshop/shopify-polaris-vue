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
    expect(webComponent.attributes("disabled")).toBe("");
  });

  it("forwards accessibilityLabel prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        accessibilityLabel: "Add product"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("accessibility-label")).toBe("Add product");
  });

  it("forwards command prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        command: "--toggle"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("command")).toBe("--toggle");
  });

  it("forwards commandFor prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        commandFor: "modal-1"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("command-for")).toBe("modal-1");
  });

  it("forwards download prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        download: "report.csv"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("download")).toBe("report.csv");
  });

  it("forwards href prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        href: "https://example.com"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("href")).toBe("https://example.com");
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

  it("forwards interestFor prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        interestFor: "selected-products"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("interest-for")).toBe("selected-products");
  });

  it("forwards loading prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        loading: true
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("loading")).toBe("");
  });

  it("forwards target prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        target: "_blank"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("target")).toBe("_blank");
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

  it("forwards variant prop", () => {
    const wrapper = mount(Sbutton, {
      props: {
        variant: "secondary"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("variant")).toBe("secondary");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits click event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });
});
