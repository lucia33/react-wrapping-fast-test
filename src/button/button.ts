import { attr, css } from "@microsoft/fast-element";
import {
    Button as FoundationButton,
    buttonTemplate as template,
} from "@microsoft/fast-foundation";

const styles = css `
    :host([appearance="accent"])
        button {
            background: red;
        }
`;

/**
 * Types of button appearance.
 * @public
 */
 export type ButtonAppearance =
 | "accent"
 | "lightweight"
 | "neutral"
 | "outline"
 | "stealth";
export class Button extends FoundationButton {
  /**
     * The appearance the button should have.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
   @attr
   public appearance: ButtonAppearance = "neutral";
};

export const cerButtonBasic = Button.compose({
    baseName: "button-basic",
    baseClass: FoundationButton,
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});

export { styles as buttonBasicStyles };
