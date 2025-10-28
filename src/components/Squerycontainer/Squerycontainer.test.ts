import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Squerycontainer from "../index.vue";

describe("Squerycontainer", () => {
  it("renders properly", () => {
    const wrapper = mount(Squerycontainer, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Squerycontainer, {
      props: {
        containerName: "test-container"
      }
    });
    
    const webComponent = wrapper.find("s-query-container");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("container-name")).toBe("test-container");
  });

  it("renders slot content", () => {
    const wrapper = mount(Squerycontainer, {
      slots: {
        default: "<div>Slot content</div>"
      }
    });
    expect(wrapper.html()).toContain("Slot content");
  });

  it("renders without containerName prop", () => {
    const wrapper = mount(Squerycontainer, {
      slots: {
        default: "Content"
      }
    });
    const webComponent = wrapper.find("s-query-container");
    expect(webComponent.exists()).toBe(true);
  });
});
