import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stable from "../index.vue";

describe("Stable", () => {
  it("renders properly", () => {
    const wrapper = mount(Stable, {
      slots: {
        default: "Test Content"
      }
    });
    expect(wrapper.text()).toContain("Test Content");
  });

  it("passes props to the web component", async () => {
    const wrapper = mount(Stable, {
      props: {
        loading: true,
        paginate: true
      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("loading")).toBeDefined();
    expect(webComponent.attributes("paginate")).toBeDefined();
  });

  it("passes hasNextPage prop to web component", () => {
    const wrapper = mount(Stable, {
      props: {
        hasNextPage: true
      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.attributes("has-next-page")).toBeDefined();
  });

  it("passes hasPreviousPage prop to web component", () => {
    const wrapper = mount(Stable, {
      props: {
        hasPreviousPage: true
      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.attributes("has-previous-page")).toBeDefined();
  });

  it("passes variant prop to web component", () => {
    const wrapper = mount(Stable, {
      props: {
        variant: "list"
      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.attributes("variant")).toBe("list");
  });

  it("emits nextpage event", async () => {
    const wrapper = mount(Stable);
    const webComponent = wrapper.find("s-table");
    
    await webComponent.trigger("nextpage");
    
    expect(wrapper.emitted("nextpage")).toBeTruthy();
    expect(wrapper.emitted("nextpage")?.length).toBe(1);
  });

  it("emits previouspage event", async () => {
    const wrapper = mount(Stable);
    const webComponent = wrapper.find("s-table");
    
    await webComponent.trigger("previouspage");
    
    expect(wrapper.emitted("previouspage")).toBeTruthy();
    expect(wrapper.emitted("previouspage")?.length).toBe(1);
  });

  it("renders filters slot when provided", () => {
    const wrapper = mount(Stable, {
      slots: {
        filters: '<div class="test-filter">Filter Content</div>'
      }
    });
    
    expect(wrapper.html()).toContain("test-filter");
    expect(wrapper.html()).toContain("Filter Content");
  });

  it("renders without filters slot", () => {
    const wrapper = mount(Stable, {
      slots: {
        default: "Table Content"
      }
    });
    
    expect(wrapper.html()).toContain("Table Content");
  });
});
