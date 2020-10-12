import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let themeService: ThemeService;
  const cssVariables = {
    '--rcf-elements-bg-colour': '',
    '--rcf-main-bg-colour': '',
    '--rcf-text-colour': '',
    '--rcf-input-bg-colour': '',

    '--rcf-dark-elements-bg-colour': 'black',
    '--rcf-dark-main-bg-colour': 'gray',
    '--rcf-dark-text-colour': 'brown',
    '--rcf-dark-input-bg-colour': 'blue',

    '--rcf-light-elements-bg-colour': 'white',
    '--rcf-light-main-bg-colour': 'yellow',
    '--rcf-light-text-colour': 'green',
    '--rcf-light-input-bg-colour': 'pink',
  };
  beforeEach(() => {
    const fakeComputedStyle = {
      getPropertyValue: jasmine
        .createSpy('getPropertyValue')
        .and.callFake((key: string): string => cssVariables[key]),
    };
    const fakeWindow = {
      getComputedStyle: jasmine
        .createSpy('getComputedStyle')
        .and.returnValue(fakeComputedStyle),
      document: {
        documentElement: {
          style: {
            setProperty: jasmine
              .createSpy('setProperty')
              .and.callFake((key: string, value: string): void => {
                cssVariables[key] = value;
              }),
          },
        },
      },
    };
    themeService = new ThemeService(fakeWindow as any);
  });

  describe('isDarkTheme()', () => {
    it('Returns true if dark theme is active', () => {
      themeService.setDarkTheme();
      expect(themeService.isDarkTheme()).toBe(true);
    });

    it('Returns false if light theme is active', () => {
      themeService.setLightTheme();
      expect(themeService.isDarkTheme()).toBe(false);
    });
  });

  describe('setDarkTheme()', () => {
    it('Sets currentTheme as Dark', () => {
      themeService.setDarkTheme();
      expect(themeService.isDarkTheme()).toBe(true);
    });

    it('Applies dark theme CSS variables', () => {
      themeService.setDarkTheme();
      expect(cssVariables['--rcf-elements-bg-colour']).toBe(
        cssVariables['--rcf-dark-elements-bg-colour']
      );
      expect(cssVariables['--rcf-main-bg-colour']).toBe(
        cssVariables['--rcf-dark-main-bg-colour']
      );
      expect(cssVariables['--rcf-text-colour']).toBe(
        cssVariables['--rcf-dark-text-colour']
      );
      expect(cssVariables['--rcf-input-bg-colour']).toBe(
        cssVariables['--rcf-dark-input-bg-colour']
      );
    });
  });

  describe('setLightTheme()', () => {
    it('Sets currentTheme as Light', () => {
      themeService.setLightTheme();
      expect(themeService.isDarkTheme()).toBe(false);
    });

    it('Applies light theme CSS variables', () => {
      themeService.setLightTheme();
      expect(cssVariables['--rcf-elements-bg-colour']).toBe(
        cssVariables['--rcf-light-elements-bg-colour']
      );
      expect(cssVariables['--rcf-main-bg-colour']).toBe(
        cssVariables['--rcf-light-main-bg-colour']
      );
      expect(cssVariables['--rcf-text-colour']).toBe(
        cssVariables['--rcf-light-text-colour']
      );
      expect(cssVariables['--rcf-input-bg-colour']).toBe(
        cssVariables['--rcf-light-input-bg-colour']
      );
    });
  });

  describe('toggleTheme()', () => {
    it('Toggles between light and dark theme', () => {
      themeService.setLightTheme();
      themeService.toggleTheme();
      expect(themeService.isDarkTheme()).toBe(true);
      themeService.toggleTheme();
      expect(themeService.isDarkTheme()).toBe(false);
    });
  });
});
