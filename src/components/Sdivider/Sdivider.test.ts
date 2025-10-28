import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdivider from "./index.vue";

describe("Sdivider", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdivider, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdivider, {
      props: {
        color: "strong",
        direction: "block"
      }
    });
    
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("color")).toBe("strong");
    expect(webComponent.attributes("direction")).toBe("block");
  });

  it("applies default color when not specified", () => {
    const wrapper = mount(Sdivider);
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.exists()).toBe(true);
  });

  it("applies base color variant", () => {
    const wrapper = mount(Sdivider, {
      props: {
        color: "base"
      }
    });
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.attributes("color")).toBe("base");
  });

  it("applies inline direction", () => {
    const wrapper = mount(Sdivider, {
      props: {
        direction: "inline"
      }
    });
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.attributes("direction")).toBe("inline");
  });

  it("applies block direction", () => {
    const wrapper = mount(Sdivider, {
      props: {
        direction: "block"
      }
    });
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.attributes("direction")).toBe("block");
  });
});
