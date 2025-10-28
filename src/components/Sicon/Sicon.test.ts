import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sicon from "./index.vue";

describe("Sicon", () => {
  it("renders properly", () => {
    const wrapper = mount(Sicon, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sicon, {
      props: {
        type: "home",
        tone: "info"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.exists()).toBe(true);
  });

  it("applies color prop", () => {
    const wrapper = mount(Sicon, {
      props: {
        color: "subdued"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("color")).toBe("subdued");
  });

  it("applies size prop", () => {
    const wrapper = mount(Sicon, {
      props: {
        size: "small"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("size")).toBe("small");
  });

  it("applies tone prop", () => {
    const wrapper = mount(Sicon, {
      props: {
        tone: "success"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("tone")).toBe("success");
  });

  it("applies type prop", () => {
    const wrapper = mount(Sicon, {
      props: {
        type: "edit"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("type")).toBe("edit");
  });

  it("applies interestFor prop", () => {
    const wrapper = mount(Sicon, {
      props: {
        interestFor: "tooltip-id"
      }
    });
    
    const webComponent = wrapper.find("s-icon");
    expect(webComponent.attributes("interest-for")).toBe("tooltip-id");
  });
});
