import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdatepicker from "../index.vue";

describe("Sdatepicker", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdatepicker, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdatepicker, {
      props: {
        type: "range",
        value: "2024-01-01--2024-01-31"
      }
    });
    
    const webComponent = wrapper.find("s-datepicker");
    expect(webComponent.exists()).toBe(true);
  });

  it("passes allow prop to the web component", async () => {
    const wrapper = mount(Sdatepicker, {
      props: {
        allow: "2024-06-01--2024-06-31"
      }
    });
    
    const webComponent = wrapper.find("s-datepicker");
    expect(webComponent.attributes("allow")).toBe("2024-06-01--2024-06-31");
  });

  it("passes type prop to the web component", async () => {
    const wrapper = mount(Sdatepicker, {
      props: {
        type: "single"
      }
    });
    
    const webComponent = wrapper.find("s-datepicker");
    expect(webComponent.attributes("type")).toBe("single");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sdatepicker);
    const webComponent = wrapper.find("s-datepicker");
    
    await webComponent.trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("emits change event", async () => {
    const wrapper = mount(Sdatepicker);
    const webComponent = wrapper.find("s-datepicker");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sdatepicker);
    const webComponent = wrapper.find("s-datepicker");
    
    await webComponent.trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("emits input event", async () => {
    const wrapper = mount(Sdatepicker);
    const webComponent = wrapper.find("s-datepicker");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("emits viewchange event", async () => {
    const wrapper = mount(Sdatepicker);
    const webComponent = wrapper.find("s-datepicker");
    
    await webComponent.trigger("viewchange");
    expect(wrapper.emitted("viewchange")).toBeTruthy();
  });
});
