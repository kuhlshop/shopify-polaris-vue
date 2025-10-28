import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Smenu from "../index.vue";

describe("Smenu", () => {
  it("renders properly", () => {
    const wrapper = mount(Smenu, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Smenu, {
      props: {
        accessibilityLabel: "Customer actions"
      }
    });
    
    const webComponent = wrapper.find("s-menu");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("accessibilitylabel")).toBe("Customer actions");
  });

  it("renders with default slot content", () => {
    const wrapper = mount(Smenu, {
      slots: {
        default: '<s-button icon="edit">Edit product</s-button>'
      }
    });
    expect(wrapper.html()).toContain('<s-button icon="edit">Edit product</s-button>');
  });

  it("renders without accessibilityLabel prop", () => {
    const wrapper = mount(Smenu, {
      slots: {
        default: "Menu content"
      }
    });
    const webComponent = wrapper.find("s-menu");
    expect(webComponent.exists()).toBe(true);
  });

  it("renders with multiple button children", () => {
    const wrapper = mount(Smenu, {
      props: {
        accessibilityLabel: "Product actions"
      },
      slots: {
        default: `
          <s-button icon="edit">Edit product</s-button>
          <s-button icon="duplicate">Duplicate product</s-button>
          <s-button icon="archive">Archive product</s-button>
        `
      }
    });
    expect(wrapper.html()).toContain('<s-button icon="edit">Edit product</s-button>');
    expect(wrapper.html()).toContain('<s-button icon="duplicate">Duplicate product</s-button>');
    expect(wrapper.html()).toContain('<s-button icon="archive">Archive product</s-button>');
  });

  it("renders with section children", () => {
    const wrapper = mount(Smenu, {
      props: {
        accessibilityLabel: "Organized menu"
      },
      slots: {
        default: `
          <s-section heading="Product actions">
            <s-button icon="edit">Edit selected</s-button>
          </s-section>
        `
      }
    });
    expect(wrapper.html()).toContain('<s-section heading="Product actions">');
  });
});
