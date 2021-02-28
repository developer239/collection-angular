import { CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { Meta, moduleMetadata } from '@storybook/angular'
import { ButtonComponent } from 'src/app/_shared/components/button/button.component'
import { Button } from 'src/app/_shared/components/button/button.types'
import { SpinnerModule } from 'src/app/_shared/components/spinner/spinner.module'

export default {
  title: 'core/Button',
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, SpinnerModule, RouterTestingModule],
    }),
  ],
  argTypes: {
    isLoading: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    label: { control: 'text', defaultValue: 'Click me!' },
    size: {
      defaultValue: Button.SizeEnum.normal,
      control: {
        type: 'select',
        options: Object.values(Button.SizeEnum),
      },
    },
    colorStyle: {
      defaultValue: Button.StyleEnum.default,
      control: {
        type: 'select',
        options: Object.values(Button.StyleEnum),
      },
    },
  },
} as Meta

export const base = (args: any) => ({
  component: ButtonComponent,
  template: `
    <app-button
      [size]="size"
      [isLoading]="isLoading"
      [disabled]="disabled"
      [colorStyle]="colorStyle"
    >
      {{ label }}
    </app-button>
  `,
  props: { ...args },
})
