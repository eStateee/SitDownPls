import _vars from "../_vars";

let mobile_catalog_filter = document.querySelector('#mobile-catalog-filter')
let catalog_filter = document.querySelector('#catalog-filter')
let filter_item = document.querySelectorAll(".filter-item")
const params = {
  btnClassName: "js-filter-dropdown-btn",
  dropClassName: "js-filter-dropdown",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

if (mobile_catalog_filter && catalog_filter) {
function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    filter_item.forEach(el => {
      el.classList.remove(params.activeClassName)
    });
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );




    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }




    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );
      let filter_item = document.querySelector(`[data-filter='${path}']`)
      btn.classList.toggle(params.activeClassName);
      filter_item.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();
}


