import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdropzone from "../index.vue";

describe("Sdropzone", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdropzone, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        label: "Upload files",
        multiple: true
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.exists()).toBe(true);
  });

  it("handles accept prop", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        accept: ".jpg,.png,.gif"
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("accept")).toBe(".jpg,.png,.gif");
  });

  it("handles disabled prop", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("disabled")).toBeDefined();
  });

  it("handles error prop", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        error: "File size must be less than 5mb"
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("error")).toBe("File size must be less than 5mb");
  });

  it("handles required prop", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("required")).toBeDefined();
  });

  it("handles change event", async () => {
    const wrapper = mount(Sdropzone);
    const webComponent = wrapper.find("s-dropzone");
    
    await webComponent.trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("handles input event", async () => {
    const wrapper = mount(Sdropzone);
    const webComponent = wrapper.find("s-dropzone");
    
    await webComponent.trigger("input");
    expect(wrapper.emitted("input")).toBeTruthy();
  });

  it("handles droprejected event", async () => {
    const wrapper = mount(Sdropzone);
    const webComponent = wrapper.find("s-dropzone");
    
    await webComponent.trigger("droprejected");
    expect(wrapper.emitted("droprejected")).toBeTruthy();
  });
});
