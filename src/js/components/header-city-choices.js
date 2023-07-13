import _vars from "../_vars";



const cityArr = [_vars.header_city_choices_small_mobile, _vars.header_city_choices_mobile, _vars.header_city_choices_tablet, _vars.header_city_choices]

for (let sel of cityArr) {
  const city_choices = new Choices(sel, {
    searchEnabled: false,
    position: 'bottom',
    shouldSort: false,
    allowHTML: true,
    classNames: {
        containerOuter: 'choices header-city-choices',
        containerInner: 'choices__inner header-city-choices__inner',
        itemSelectable: 'header-city-choices__item--selectable',
        list: 'header-city-choices',
        itemChoice: 'header-city-choices__item--choice',
        selectedState: 'header-city-choices--is-selected',
        listSingle: 'header-city--single'
    },
    itemSelectText: '',
});


}



