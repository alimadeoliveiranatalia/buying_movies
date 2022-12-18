import { ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./Button"
import { Icon } from "./Icon"

export default {
    title: 'components/Button',
    component: Button,
    subcomponents: [Icon]
} ;

export function Default(args: ButtonProps){
    return <Button {...args} />
}