# Icon

Icon svg source from https://www.svgrepo.com/collection/iconsax-line-oval-icons/

Adding new icons

1. Add new file in `icons/` and copy/paste an existing icon
2. Download the svg (from the above url) and copy the svg source into the `<svg>` component in the
   component
3. Change any `kebab-case` props to `camelCase`
4. Change names for the component in the file
5. Add import for new icon in `./index.tsx`
6. Add icon name to the `IconName` union and
7. Add icon to `icons` object
