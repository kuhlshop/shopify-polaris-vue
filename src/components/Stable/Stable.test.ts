import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stable from "./index.vue";

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
        paginate: true,
        hasNextPage: true,
        hasPreviousPage: false,
        variant: "list"
      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.exists()).toBe(true);
    expect(webComponent.attributes("loading")).toBe("true");
    expect(webComponent.attributes("paginate")).toBe("true");
  });

  it("renders filters slot", () => {
    const wrapper = mount(Stable, {
      slots: {
        filters: "<div>Filter Content</div>"
      }
    });
    expect(wrapper.html()).toContain("Filter Content");
  });

  it("emits nextpage event", async () => {
    const wrapper = mount(Stable);
    const webComponent = wrapper.find("s-table");
    
    await webComponent.trigger("nextpage");
    
    expect(wrapper.emitted()).toHaveProperty("nextpage");
  });

  it("emits previouspage event", async () => {
    const wrapper = mount(Stable);
    const webComponent = wrapper.find("s-table");
    
    await webComponent.trigger("previouspage");
    
    expect(wrapper.emitted()).toHaveProperty("previouspage");
  });

  it("handles all boolean props", () => {
    const wrapper = mount(Stable, {
      props: {
        hasNextPage: true,
        hasPreviousPage: true,
        loading: true,
        paginate: true
      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.attributes("hasnextpage")).toBe("true");
    expect(webComponent.attributes("haspreviouspage")).toBe("true");
    expect(webComponent.attributes("loading")).toBe("true");
    expect(webComponent.attributes("paginate")).toBe("true");
  });

  it("handles variant prop", () => {
    const wrapper = mount(Stable, {
      props: {
        variant: "list"
      }
    });
    
    const webComponent = wrapper.find("s-table");
    expect(webComponent.attributes("variant")).toBe("list");
  });
});
