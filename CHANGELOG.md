## [4.0.2](https://github.com/e-Spirit/fsxa-ui/compare/v4.0.1...v4.0.2) (2021-05-10)


### Bug Fixes

* **headersection:** moved padding in title of header section to h1 ([3f03391](https://github.com/e-Spirit/fsxa-ui/commit/3f03391506efcbd16d0b3ac49a499e2fc06c7736))

## [4.0.1](https://github.com/e-Spirit/fsxa-ui/compare/v4.0.0...v4.0.1) (2021-03-12)


### Bug Fixes

* **accordionsection:** fixed accordionSection ([41ff3fe](https://github.com/e-Spirit/fsxa-ui/commit/41ff3fec02a3198f52d0fcaacd8d0e35eebcf9aa))

# [4.0.0](https://github.com/e-Spirit/fsxa-ui/compare/v3.0.1...v4.0.0) (2021-03-11)

- Release to fix release errors and adjust changelog


## [3.0.1](https://github.com/e-Spirit/fsxa-ui/compare/v3.0.0...v3.0.1) (2021-02-26)

### Bug Fixes

- **GoogleMapsSection:** Removed default value for language prop

# [3.0.0](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.9...v3.0.0) (2021-02-25)

### Features

- **Import sections:** Added new way to import sections directly

### Bugfixes

- **Accordion:** Property `open` now works as intended

- **GoogleMapsSection:** removed default value for language

- **ImageSlider and Slider:** added missing exports

- **LineSeparator:** fixed LineSeparator to be working properly

- **NewsDetail:** Image in NewsDetail now uses the Image properties and minor styling changes

- **InterestingFactsSection:** Counters in InterestingFactsSection is now optional

- **FullWidthImageSlider:** fixed FullWidthImageSlider when only one slide is given

- **GoogleMapsSection:** fixed issue where undefined values would appear

### BREAKING CHANGES

- **ProductDetailSection:** The property date has been changed from Date to string. The property socialText
  does not exist anymore and is transformed into an object.

- **ProductDetailSection:** The property `foldableContentList` was removed and instead a slot `additionalContent` was added.

- **Component Validation:** Invalid strings or numbers in properties now causes an error in the console, and the component will not be rendered anymore.

## [2.3.9](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.8...v2.3.9) (2021-01-25)

### Bug Fixes

- **package-lock:** fixed registry for git-cz ([7a9b966](https://github.com/e-Spirit/fsxa-ui/commit/7a9b9660cd93d1820ea81185af25824c67804655))

## [2.3.8](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.7...v2.3.8) (2021-01-21)

### Bug Fixes

- 🐛 Remove unused files, extract doc components from bundle ([49e9f4c](https://github.com/e-Spirit/fsxa-ui/commit/49e9f4c3e7afe9f630a82a3be6ac176f38e0225c))

## [2.3.7](https://github.com/e-Spirit/fsxa-ui/compare/v2.3.6...v2.3.7) (2021-01-20)

### Bug Fixes

- 🐛 Remove unused dependency and bump version ([ac615aa](https://github.com/e-Spirit/fsxa-ui/commit/ac615aaaeb1d1b75c67f447021bf216fd7a43a16))

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
