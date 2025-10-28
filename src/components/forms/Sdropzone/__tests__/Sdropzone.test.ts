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
    expect(webComponent.attributes("label")).toBe("Upload files");
    expect(webComponent.attributes("multiple")).toBe("");
  });

  it("passes accept prop correctly", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        accept: ".jpg,.png,.gif"
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("accept")).toBe(".jpg,.png,.gif");
  });

  it("passes disabled prop correctly", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        disabled: true
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("disabled")).toBe("");
  });

  it("passes error prop correctly", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        error: "File size must be less than 5mb"
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("error")).toBe("File size must be less than 5mb");
  });

  it("passes accessibility props correctly", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        accessibilityLabel: "Upload image of type jpg, png, or gif",
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("accessibilitylabel")).toBe("Upload image of type jpg, png, or gif");
    expect(webComponent.attributes("labelaccessibilityvisibility")).toBe("exclusive");
  });

  it("passes name and required props correctly", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        name: "file",
        required: true
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("name")).toBe("file");
    expect(webComponent.attributes("required")).toBe("");
  });

  it("passes value prop correctly", async () => {
    const wrapper = mount(Sdropzone, {
      props: {
        value: ""
      }
    });
    
    const webComponent = wrapper.find("s-dropzone");
    expect(webComponent.attributes("value")).toBe("");
  });

  it("emits change event", async () => {
    const wrapper = mount(Sdropzone);
    const webComponent = wrapper.find("s-dropzone");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Sdropzone);
    const webComponent = wrapper.find("s-dropzone");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("emits droprejected event", async () => {
    const wrapper = mount(Sdropzone);
    const webComponent = wrapper.find("s-dropzone");
    
    await webComponent.trigger("droprejected");
    
    expect(wrapper.emitted("droprejected")).toBeTruthy();
    expect(wrapper.emitted("droprejected")?.length).toBe(1);
  });
});
