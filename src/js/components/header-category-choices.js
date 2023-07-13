import _vars from "../_vars";


const categArr = [_vars.header_category_selector_small_mobile, _vars.header_category_selector_mobile, _vars.header_category_selector_tablet, _vars.header_category_selector]

for (let sel of categArr) {
  const category_choices = new Choices(sel, {
    searchEnabled: false,
    position: 'bottom',
    shouldSort: false,
    allowHTML: true,
    classNames: {
        containerOuter: 'choices header-category-choices',
        containerInner: 'choices__inner header-category-choices__inner',
        itemSelectable: 'header-category-choices__item--selectable',
        list: 'header-category-choices',
        itemChoice: 'header-category-choices__item--choice',
        selectedState: 'header-category-choices--is-selected',
        listSingle: 'header-category--single'
    },
    itemSelectText: '',

});

}



