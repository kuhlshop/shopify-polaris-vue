import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Sdatefield from "../index.vue";

describe("Sdatefield", () => {
  it("renders properly", () => {
    const wrapper = mount(Sdatefield, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        label: "Event date",
        placeholder: "Select date"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("label")).toBe("Event date");
    expect(webComponent.attributes("placeholder")).toBe("Select date");
  });

  it("passes value prop correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        value: "2024-03-15"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("value")).toBe("2024-03-15");
  });

  it("passes boolean props correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        required: true,
        disabled: true,
        readOnly: true
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("required")).toBe("");
    expect(webComponent.attributes("disabled")).toBe("");
    expect(webComponent.attributes("readonly")).toBe("");
  });

  it("passes date restriction props correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        allow: "2024-03-20, 2024-03-22",
        disallow: "2024-03-21",
        allowDays: "monday, tuesday",
        disallowDays: "sunday, saturday"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("allow")).toBe("2024-03-20, 2024-03-22");
    expect(webComponent.attributes("disallow")).toBe("2024-03-21");
    expect(webComponent.attributes("allowdays")).toBe("monday, tuesday");
    expect(webComponent.attributes("disallowdays")).toBe("sunday, saturday");
  });

  it("passes error prop correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        error: "Event date is required"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("error")).toBe("Event date is required");
  });

  it("passes autocomplete prop correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        autocomplete: "bday"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("autocomplete")).toBe("bday");
  });

  it("passes labelAccessibilityVisibility prop correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        labelAccessibilityVisibility: "exclusive"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("labelaccessibilityvisibility")).toBe("exclusive");
  });

  it("passes view and defaultView props correctly", async () => {
    const wrapper = mount(Sdatefield, {
      props: {
        view: "2024-03",
        defaultView: "2024-02"
      }
    });
    
    const webComponent = wrapper.find("s-datefield");
    expect(webComponent.attributes("view")).toBe("2024-03");
    expect(webComponent.attributes("defaultview")).toBe("2024-02");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("blur");
    
    expect(wrapper.emitted("blur")).toBeTruthy();
    expect(wrapper.emitted("blur")?.length).toBe(1);
  });

  it("emits change event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("change");
    
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")?.length).toBe(1);
  });

  it("emits focus event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("focus");
    
    expect(wrapper.emitted("focus")).toBeTruthy();
    expect(wrapper.emitted("focus")?.length).toBe(1);
  });

  it("emits input event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("input");
    
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")?.length).toBe(1);
  });

  it("emits invalid event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("invalid");
    
    expect(wrapper.emitted("invalid")).toBeTruthy();
    expect(wrapper.emitted("invalid")?.length).toBe(1);
  });

  it("emits viewchange event", async () => {
    const wrapper = mount(Sdatefield);
    const webComponent = wrapper.find("s-datefield");
    
    await webComponent.trigger("viewchange");
    
    expect(wrapper.emitted("viewchange")).toBeTruthy();
    expect(wrapper.emitted("viewchange")?.length).toBe(1);
  });
});
