import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spopover from "../index.vue";

describe("Spopover", () => {
  it("renders properly", () => {
    const wrapper = mount(Spopover, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Spopover, {
      props: {
        blockSize: "200px",
        inlineSize: "300px"
      }
    });
    
    const webComponent = wrapper.find("s-popover");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("block-size")).toBe("200px");
    expect(webComponent.attributes("inline-size")).toBe("300px");
  });

  it("passes maxBlockSize and maxInlineSize props", async () => {
    const wrapper = mount(Spopover, {
      props: {
        maxBlockSize: "500px",
        maxInlineSize: "600px"
      }
    });
    
    const webComponent = wrapper.find("s-popover");
    expect(webComponent.attributes("max-block-size")).toBe("500px");
    expect(webComponent.attributes("max-inline-size")).toBe("600px");
  });

  it("passes minBlockSize and minInlineSize props", async () => {
    const wrapper = mount(Spopover, {
      props: {
        minBlockSize: "100px",
        minInlineSize: "150px"
      }
    });
    
    const webComponent = wrapper.find("s-popover");
    expect(webComponent.attributes("min-block-size")).toBe("100px");
    expect(webComponent.attributes("min-inline-size")).toBe("150px");
  });

  it("emits afterhide event", async () => {
    const wrapper = mount(Spopover);
    const webComponent = wrapper.find("s-popover");
    
    await webComponent.trigger("afterhide");
    expect(wrapper.emitted("afterhide")).toBeTruthy();
  });

  it("emits aftershow event", async () => {
    const wrapper = mount(Spopover);
    const webComponent = wrapper.find("s-popover");
    
    await webComponent.trigger("aftershow");
    expect(wrapper.emitted("aftershow")).toBeTruthy();
  });

  it("emits aftertoggle event", async () => {
    const wrapper = mount(Spopover);
    const webComponent = wrapper.find("s-popover");
    
    await webComponent.trigger("aftertoggle");
    expect(wrapper.emitted("aftertoggle")).toBeTruthy();
  });

  it("emits hide event", async () => {
    const wrapper = mount(Spopover);
    const webComponent = wrapper.find("s-popover");
    
    await webComponent.trigger("hide");
    expect(wrapper.emitted("hide")).toBeTruthy();
  });

  it("emits show event", async () => {
    const wrapper = mount(Spopover);
    const webComponent = wrapper.find("s-popover");
    
    await webComponent.trigger("show");
    expect(wrapper.emitted("show")).toBeTruthy();
  });

  it("emits toggle event", async () => {
    const wrapper = mount(Spopover);
    const webComponent = wrapper.find("s-popover");
    
    await webComponent.trigger("toggle");
    expect(wrapper.emitted("toggle")).toBeTruthy();
  });
});
