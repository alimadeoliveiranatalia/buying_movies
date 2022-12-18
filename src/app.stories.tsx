import { Meta } from "@storybook/react";
import { App } from "./App";
import { Button } from "./components/Button";
import { MovieCard } from "./components/MovieCard";

export default {
    title: 'page/App',
    component: App,
    subcomponents: [ Button, MovieCard]
} as Meta;

export function Default(){
    return ( <App />)
}