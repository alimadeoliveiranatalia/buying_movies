import { ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./Button"

export default {
    title: 'components/Button',
    component: Button
} as ComponentMeta<typeof Button>

export function Default(){
    return <Button title="" iconName="action" selected={true} />
}

export const Action = () => <Button title="action" iconName="action" selected={true}/>

export const Comedy = () => <Button title="comedy" iconName="comedy" selected={true}/>

export const Documentary = () => <Button title="documentary" iconName="documentary" selected={true}/>

export const Horror = () => <Button title="horror" iconName="horror" selected={true}/>

export const Family = () => <Button title="family" iconName="family" selected={true}/>