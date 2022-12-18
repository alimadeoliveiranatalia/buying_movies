import { ComponentMeta } from "@storybook/react";
import { Icon, IconProps } from "./Icon"

export default {
    title: 'components/Icon',
    component: Icon,
    args: {
        props: {
            name: 'action'
        } 
    }
} as ComponentMeta<typeof Icon>;

export const Action = () => <Icon name="action" color="white"/>

export const Comedy = () => <Icon name="comedy" color="white"/>

export const Documentary = () => <Icon name="documentary" color="white"/>

export const Drama = () => <Icon name="drama" color="white"/>

export const Horror = () => <Icon name="horror" color="white"/>

export const Family = () => <Icon name="family" color="white"/>


