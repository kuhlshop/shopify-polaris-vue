import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sicon from "./index.vue";

describe("Sicon", () => {
  it("renders properly", () => {
    const wrapper = mount(Sicon);
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sicon, {
      props: {
        type: "home",
        size: "small"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("type")).toBe("home");
    expect(webComponent.attributes("size")).toBe("small");
  });

  it("passes color prop correctly", async () => {
    const wrapper = mount(Sicon, {
      props: {
        color: "subdued"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("color")).toBe("subdued");
  });

  it("passes tone prop correctly", async () => {
    const wrapper = mount(Sicon, {
      props: {
        tone: "success"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("tone")).toBe("success");
  });

  it("passes interestFor prop correctly", async () => {
    const wrapper = mount(Sicon, {
      props: {
        interestFor: "info-tooltip"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("interest-for")).toBe("info-tooltip");
  });

  it("renders slot content", () => {
    const wrapper = mount(Sicon, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });
});
