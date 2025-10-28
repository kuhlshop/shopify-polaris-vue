import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spopover from "./index.vue";

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

  it("passes all size props to the web component", async () => {
    const wrapper = mount(Spopover, {
      props: {
        blockSize: "auto",
        inlineSize: "50%",
        maxBlockSize: "500px",
        maxInlineSize: "none",
        minBlockSize: "100px",
        minInlineSize: "0"
      }
    });
    
    const webComponent = wrapper.find("s-popover");
    expect(webComponent.attributes("block-size")).toBe("auto");
    expect(webComponent.attributes("inline-size")).toBe("50%");
    expect(webComponent.attributes("max-block-size")).toBe("500px");
    expect(webComponent.attributes("max-inline-size")).toBe("none");
    expect(webComponent.attributes("min-block-size")).toBe("100px");
    expect(webComponent.attributes("min-inline-size")).toBe("0");
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
