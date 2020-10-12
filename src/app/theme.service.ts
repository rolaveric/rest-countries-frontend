import { Inject, Injectable } from '@angular/core';

import { WINDOW } from './window.token';

enum Theme {
  Light,
  Dark,
}

const ACTIVE_ELEMENTS_BG = '--rcf-elements-bg-colour';
const ACTIVE_MAIN_BG = '--rcf-main-bg-colour';
const ACTIVE_TEXT = '--rcf-text-colour';
const ACTIVE_INPUT_BG = '--rcf-input-bg-colour';

const DARK_ELEMENTS_BG = '--rcf-dark-elements-bg-colour';
const DARK_MAIN_BG = '--rcf-dark-main-bg-colour';
const DARK_TEXT = '--rcf-dark-text-colour';
const DARK_INPUT_BG = '--rcf-dark-input-bg-colour';

const LIGHT_ELEMENTS_BG = '--rcf-light-elements-bg-colour';
const LIGHT_MAIN_BG = '--rcf-light-main-bg-colour';
const LIGHT_TEXT = '--rcf-light-text-colour';
const LIGHT_INPUT_BG = '--rcf-light-input-bg-colour';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme: Theme;

  constructor(@Inject(WINDOW) private window: Window) {
    this.setDarkTheme();
  }

  isDarkTheme(): boolean {
    return this.currentTheme === Theme.Dark;
  }

  setDarkTheme(): void {
    this.currentTheme = Theme.Dark;
    this.setTheme(
      this.getVariable(DARK_ELEMENTS_BG),
      this.getVariable(DARK_MAIN_BG),
      this.getVariable(DARK_TEXT),
      this.getVariable(DARK_INPUT_BG)
    );
  }

  setLightTheme(): void {
    this.currentTheme = Theme.Light;
    this.setTheme(
      this.getVariable(LIGHT_ELEMENTS_BG),
      this.getVariable(LIGHT_MAIN_BG),
      this.getVariable(LIGHT_TEXT),
      this.getVariable(LIGHT_INPUT_BG)
    );
  }

  toggleTheme(): void {
    if (this.isDarkTheme()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  private getVariable(variableName: string): string {
    return this.window
      .getComputedStyle(this.window.document.documentElement)
      .getPropertyValue(variableName);
  }

  private setVariable(variableName: string, value: string): void {
    this.window.document.documentElement.style.setProperty(variableName, value);
  }

  private setTheme(
    elementsBgColour: string,
    mainBgColour: string,
    textColour: string,
    inputBgColour: string
  ): void {
    this.setVariable(ACTIVE_ELEMENTS_BG, elementsBgColour);
    this.setVariable(ACTIVE_MAIN_BG, mainBgColour);
    this.setVariable(ACTIVE_TEXT, textColour);
    this.setVariable(ACTIVE_INPUT_BG, inputBgColour);
  }
}
