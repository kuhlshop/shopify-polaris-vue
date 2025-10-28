import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdivider from "../index.vue";

describe("Sdivider", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdivider);
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.exists()).toBe(true);
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

  it("applies custom color prop", () => {
    const wrapper = mount(Sdivider, {
      props: {
        color: "strong"
      }
    });
    
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.attributes("color")).toBe("strong");
  });

  it("applies custom direction prop", () => {
    const wrapper = mount(Sdivider, {
      props: {
        direction: "block"
      }
    });
    
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.attributes("direction")).toBe("block");
  });

  it("renders with default props", () => {
    const wrapper = mount(Sdivider);
    const webComponent = wrapper.find("s-divider");
    expect(webComponent.exists()).toBe(true);
  });
});
