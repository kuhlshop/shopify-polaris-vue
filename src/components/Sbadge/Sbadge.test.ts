import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sbadge from "./index.vue";

describe("Sbadge", () => {
  it("renders properly", () => {
    const wrapper = mount(Sbadge, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sbadge, {
      props: {
        tone: "success",
        size: "large"
      }
    });
    
    const webComponent = wrapper.find("s-badge");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("tone")).toBe("success");
    expect(webComponent.attributes("size")).toBe("large");
  });

  it("applies color prop correctly", () => {
    const wrapper = mount(Sbadge, {
      props: {
        color: "strong"
      }
    });
    
    const webComponent = wrapper.find("s-badge");
    expect(webComponent.attributes("color")).toBe("strong");
  });

  it("applies icon prop correctly", () => {
    const wrapper = mount(Sbadge, {
      props: {
        icon: "alert-triangle"
      }
    });
    
    const webComponent = wrapper.find("s-badge");
    expect(webComponent.attributes("icon")).toBe("alert-triangle");
  });

  it("applies tone prop correctly", () => {
    const wrapper = mount(Sbadge, {
      props: {
        tone: "critical"
      }
    });
    
    const webComponent = wrapper.find("s-badge");
    expect(webComponent.attributes("tone")).toBe("critical");
  });

  it("applies size prop correctly", () => {
    const wrapper = mount(Sbadge, {
      props: {
        size: "base"
      }
    });
    
    const webComponent = wrapper.find("s-badge");
    expect(webComponent.attributes("size")).toBe("base");
  });

  it("renders slot content correctly", () => {
    const slotContent = "Fulfilled";
    const wrapper = mount(Sbadge, {
      slots: {
        default: slotContent
      }
    });
    
    expect(wrapper.text()).toContain(slotContent);
  });
});
