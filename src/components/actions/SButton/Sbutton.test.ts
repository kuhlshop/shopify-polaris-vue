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
        disabled: true,
        loading: false,
        tone: "critical",
        type: "submit"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("variant")).toBe("primary");
    expect(webComponent.attributes("disabled")).toBe("");
    expect(webComponent.attributes("tone")).toBe("critical");
    expect(webComponent.attributes("type")).toBe("submit");
  });

  it("forwards blur event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("forwards click event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("click");
    
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")?.length).toBe(1);
  });

  it("forwards focus event", async () => {
    const wrapper = mount(Sbutton);
    const webComponent = wrapper.find("s-button");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("passes accessibility label prop", async () => {
    const wrapper = mount(Sbutton, {
      props: {
        accessibilityLabel: "Add product"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("accessibility-label")).toBe("Add product");
  });

  it("passes href and target props for link buttons", async () => {
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

  it("passes icon prop", async () => {
    const wrapper = mount(Sbutton, {
      props: {
        icon: "plus"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("icon")).toBe("plus");
  });

  it("passes command and commandFor props", async () => {
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

  it("passes loading state", async () => {
    const wrapper = mount(Sbutton, {
      props: {
        loading: true
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("loading")).toBe("");
  });

  it("passes download attribute", async () => {
    const wrapper = mount(Sbutton, {
      props: {
        download: "report.csv"
      }
    });
    
    const webComponent = wrapper.find("s-button");
    expect(webComponent.attributes("download")).toBe("report.csv");
  });
});
