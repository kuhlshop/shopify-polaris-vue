import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sclickablechip from "../index.vue";

describe("Sclickablechip", () => {
  it("renders properly", () => {
    const wrapper = mount(Sclickablechip, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sclickablechip, {
      props: {
        accessibilityLabel: "Test label",
        color: "strong"
      }
    });
    
    const webComponent = wrapper.find("s-clickablechip");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("accessibility-label")).toBe("Test label");
    expect(webComponent.attributes("color")).toBe("strong");
  });

  it("passes disabled prop to the web component", async () => {
    const wrapper = mount(Sclickablechip, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-clickablechip");
    expect(webComponent.attributes("disabled")).toBe("");
  });

  it("passes hidden prop to the web component", async () => {
    const wrapper = mount(Sclickablechip, {
      props: {
        hidden: true
      }
    });
    
    const webComponent = wrapper.find("s-clickablechip");
    expect(webComponent.attributes("hidden")).toBe("");
  });

  it("passes href prop to the web component", async () => {
    const wrapper = mount(Sclickablechip, {
      props: {
        href: "https://example.com"
      }
    });
    
    const webComponent = wrapper.find("s-clickablechip");
    expect(webComponent.attributes("href")).toBe("https://example.com");
  });

  it("passes removable prop to the web component", async () => {
    const wrapper = mount(Sclickablechip, {
      props: {
        removable: true
      }
    });
    
    const webComponent = wrapper.find("s-clickablechip");
    expect(webComponent.attributes("removable")).toBe("");
  });

  it("emits click event", async () => {
    const wrapper = mount(Sclickablechip);
    const webComponent = wrapper.find("s-clickablechip");
    
    await webComponent.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("emits afterhide event", async () => {
    const wrapper = mount(Sclickablechip);
    const webComponent = wrapper.find("s-clickablechip");
    
    await webComponent.trigger("afterhide");
    expect(wrapper.emitted("afterhide")).toBeTruthy();
  });

  it("emits remove event", async () => {
    const wrapper = mount(Sclickablechip);
    const webComponent = wrapper.find("s-clickablechip");
    
    await webComponent.trigger("remove");
    expect(wrapper.emitted("remove")).toBeTruthy();
  });

  it("renders graphic slot", () => {
    const wrapper = mount(Sclickablechip, {
      slots: {
        graphic: '<span class="test-graphic">Icon</span>'
      }
    });
    
    expect(wrapper.html()).toContain("test-graphic");
  });
});
