## [3.0.1](https://github.com/e-Spirit/fsxa-ui/compare/v3.0.0...v3.0.1) (2021-02-26)


### Bug Fixes

* **googlemapssection.mdx:** changed property to required in GoogleMapsSection documentation ([b669a7f](https://github.com/e-Spirit/fsxa-ui/commit/b669a7f2caea3122261b9c08c2345093fa19c41f))

# [3.0.0](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.9...v3.0.0) (2021-02-25)


* Bugfixes (#73) ([2881a87](https://github.com/e-Spirit/fsxa-ui/commit/2881a8707dfe23b64181fc018f56ae33217c566e)), closes [#73](https://github.com/e-Spirit/fsxa-ui/issues/73) [#71](https://github.com/e-Spirit/fsxa-ui/issues/71) [#61](https://github.com/e-Spirit/fsxa-ui/issues/61)


### BREAKING CHANGES

* The property date has been changed from Date to string. The property socialText
does not exist anymore and is transformed an object.

removed unnecessary style css

fixed typos and removed unused import

redesign to match the docs.e-spirit.com site more

provided some documentation

refactored routes and updated dependencies

removed old entries in readme and changed router mode to history

fixed not showing correct component

added component to split view for code and docu

adjusted colors

example improvements

A code comment

Add horizontal spacing to Dropdown's selected option to avoid frequent like breaks

Sticky menu for large screens

Documentation cleanup

Reduce required parameters in ProductListItem, Headline

Use proper links in OverviewDescription, and fix scrolling

Make 'value' optional for Dropdown, add 'required' to other options' descriptions

Remove horizontal scrolling on start page, fix npm logo position

Filled quote example with actual quotes

* Add 'introduction' to menu, fix document title for components

* Fix component descriptions

* Let InterestingFactsSection documentation use ComponentWrapper, tooltips there, and small fixes

* documentation: sort parameters, use ComponentWrapper

* fix typo

* HTML title 'required' for required props and slots

* Add menu entry for introduction

* Simplify router exception for '/' route

* Remove two style.css files from prop title solution again

* Fix broken route

* Update typescript, big package-lock changes

* Update README.md with contents from 'getting started'

* adjusted README.md and GettingStarted.mdx

* remove 'dark mode', increase margins and padding, swap and label 'props' and 'example'

* Fix icons for props/ example (swap), add REQUIRED column

* TNG-819-redesign-with-bugfixes
refactor(image component): changed the validation for darken values on the image component

* legend
TNG-819-redesign-with-bugfixes
refactor(image component): changed the validation for darken values on the image component

* TNG-819-redesign-with-bugfixes
refactor(image component): changed the validation for darken values on the image component

* TNG-819-redesign-with-bugfixes
docs(slider component): added the required prop to the required slot to mark it as required

* TNG-819-redesign-with-bugfixes
docs(getting started guide): improved usability of the guide

Removed the comments from the npm and yarn commands so they can be copied using the copy to
clipboard button.

* legend
docs(documentation): added a legend to explain the colors in the props and slots tables

Co-authored-by: Barczewski, Dominik <barczewski@e-spirit.com>
Co-authored-by: vlapl <72072217+vlapl@users.noreply.github.com>
Co-authored-by: Dominik Barczewski <68270882+dbarczewski@users.noreply.github.com>
Co-authored-by: Emre Neumann <neumann@e-spirit.com>
Co-authored-by: Vlado Plaga <plaga@e-spirit.com>
Co-authored-by: Tobias Golbs <37590108+tgolbs@users.noreply.github.com>
Co-authored-by: Nino Nato <nato@e-spirit.com>

## [2.3.9](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.8...v2.3.9) (2021-01-25)


### Bug Fixes

* **package-lock:** fixed registry for git-cz ([7a9b966](https://github.com/e-Spirit/fsxa-ui/commit/7a9b9660cd93d1820ea81185af25824c67804655))

## [2.3.8](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.7...v2.3.8) (2021-01-21)


### Bug Fixes

* 🐛 Remove unused files, extract doc components from bundle ([49e9f4c](https://github.com/e-Spirit/fsxa-ui/commit/49e9f4c3e7afe9f630a82a3be6ac176f38e0225c))

## [2.3.7](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.6...v2.3.7) (2021-01-20)


### Bug Fixes

* 🐛 Remove unused dependency and bump version ([ac615aa](https://github.com/e-Spirit/fsxa-ui/commit/ac615aaaeb1d1b75c67f447021bf216fd7a43a16))

## [2.3.6](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.5...v2.3.6) (2021-01-20)

### Bug Fixes

- **accordionsection:** change text and title type from string to RenteredType ([697a247](https://github.com/e-Spirit/fsxa-ui/commit/697a24723ed56cc5f1b0e9da827f22f9f29cb5fb))

## [2.3.5](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.4...v2.3.5) (2021-01-20)

### Bug Fixes

- 🐛 Reenable animate-out animation in FullWidthSliderSection ([3c02a77](https://github.com/e-Spirit/fsxa-ui/commit/3c02a77e5d9e8a84c5c98edf9577428088b3da09))

## [2.3.4](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.3...v2.3.4) (2021-01-20)

### Bug Fixes

- 🐛 Fix FullWidthSliderSection animation ([77a5183](https://github.com/e-Spirit/fsxa-ui/commit/77a51837aaf537c55e8217bc7e722b89e29a1425))

## [2.3.3](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.2...v2.3.3) (2021-01-19)

### Bug Fixes

- 🐛 Fix layout errors in ProductListItem and ProductDetail ([c74242a](https://github.com/e-Spirit/fsxa-ui/commit/c74242afd40ea0f72c5dd5c2509e8b60be632649))

## [2.3.2](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.1...v2.3.2) (2021-01-19)

### Bug Fixes

- 🐛 Pass sizes / resolutions to img comp in ProductListItem ([41ce8a3](https://github.com/e-Spirit/fsxa-ui/commit/41ce8a38148ad690b61bbc069adfa122bfb809b9))

## [2.3.1](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.0...v2.3.1) (2021-01-19)

### Bug Fixes

- **productlistitem:** add margin above price ([3dbe7d4](https://github.com/e-Spirit/fsxa-ui/commit/3dbe7d46c80ac8f153f75cc4dce764383d864174))

# [2.3.0](https://github.com/e-Spirit/fsxa-ui/compare/v2.2.1...v2.3.0) (2021-01-19)

### Features

- Hide controls if only one image is available ([1941dc0](https://github.com/e-Spirit/fsxa-ui/commit/1941dc0ae3a7bdcbcd66d2b45803dd0146dee03c))
- Slotify List section ([130364d](https://github.com/e-Spirit/fsxa-ui/commit/130364dc8b693300bdf507bc25850a1ec16d42a7))

## [2.2.1](https://github.com/e-Spirit/fsxa-ui/compare/v2.2.0...v2.2.1) (2021-01-19)

### Bug Fixes

- 🐛 Make media in Slide full width and height ([982eeb7](https://github.com/e-Spirit/fsxa-ui/commit/982eeb7660d41d0d4c7a32f7e981f0e315ad6b7e))

# [2.2.0](https://github.com/e-Spirit/fsxa-ui/compare/v2.1.1...v2.2.0) (2021-01-19)

### Bug Fixes

- 🐛 Add hover as variant to opacity ([4a91561](https://github.com/e-Spirit/fsxa-ui/commit/4a91561694006bde962f3745134821b552cf8265))
- 🐛 fix responsive layout of headersection ([#42](https://github.com/e-Spirit/fsxa-ui/issues/42)) ([2391092](https://github.com/e-Spirit/fsxa-ui/commit/23910923e99c26897a082e1bc3fac208e5fc2cc1))

### Features

- Slotify Googlemaps section ([1998a39](https://github.com/e-Spirit/fsxa-ui/commit/1998a394e1504045a0b30edea99ab466b6845272))

## [2.1.1](https://github.com/e-Spirit/fsxa-ui/compare/v2.1.0...v2.1.1) (2021-01-19)

### Bug Fixes

- 🐛 Optimize FullWidthSliderSection animation ([113e497](https://github.com/e-Spirit/fsxa-ui/commit/113e497275be191c2aafea5c70ddc74e0f638b56))

# [2.1.0](https://github.com/e-Spirit/fsxa-ui/compare/v2.0.4...v2.1.0) (2021-01-19)

### Features

- 🎸 Pass slide and slideIndex to click event of FWSSection ([b520429](https://github.com/e-Spirit/fsxa-ui/commit/b5204292fe3e423be9014317df080c05ed3fd5bc))

## [2.0.4](https://github.com/e-Spirit/fsxa-ui/compare/v2.0.3...v2.0.4) (2021-01-18)

### Bug Fixes

- 🐛 rename onSlideAnimation to handleSlideAnimation ([b48a322](https://github.com/e-Spirit/fsxa-ui/commit/b48a322cde5ae450a094b19418ae7a17e40347f8))

## [2.0.3](https://github.com/e-Spirit/fsxa-ui/compare/v2.0.2...v2.0.3) (2021-01-18)

### Bug Fixes

- 🐛 Remove bottom padding from FullWidthSliderSection ([fe39b51](https://github.com/e-Spirit/fsxa-ui/commit/fe39b514add8677d06161b6cab73bfb41b134671))

## [2.0.2](https://github.com/e-Spirit/fsxa-ui/compare/v2.0.1...v2.0.2) (2021-01-18)

### Bug Fixes

- 🐛 Add all width classes to tailwind whitelist ([d932430](https://github.com/e-Spirit/fsxa-ui/commit/d932430b13ecc01f7847a1ca1fb6593ba444b3b1))

## [2.0.1](https://github.com/e-Spirit/fsxa-ui/compare/v2.0.0...v2.0.1) (2021-01-15)

### Bug Fixes

- 🐛 fix responsive layout of ProductDetailSection ([#41](https://github.com/e-Spirit/fsxa-ui/issues/41)) ([0f2e7e1](https://github.com/e-Spirit/fsxa-ui/commit/0f2e7e10f47f2b6a2ccec24fbf93b9a6dd966709))

# [2.0.0](https://github.com/e-Spirit/fsxa-ui/compare/v1.0.0...v2.0.0) (2021-01-15)

- Fix mobile menu (#35) ([65ec518](https://github.com/e-Spirit/fsxa-ui/commit/65ec518312051d81d7c1a5ce01bfc62e775b30bb)), closes [#35](https://github.com/e-Spirit/fsxa-ui/issues/35)

### Features

- 🎸 Let HeaderSection use slots ([#37](https://github.com/e-Spirit/fsxa-ui/issues/37)) ([52306e3](https://github.com/e-Spirit/fsxa-ui/commit/52306e3d763d86744222c6e30ec78b14b49558e0))

### BREAKING CHANGES

- If an item is clicked a itemClicked event is emitted.

# 1.0.0 (2020-11-30)

### Features

- **semantic-release:** we've added semantic-release to automate the release process ([2c235cd](https://github.com/e-Spirit/fsxa-ui/commit/2c235cda36e467bc9ab600408b99e8259bd1614e))
