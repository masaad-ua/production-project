import {ResolveOptions} from "node:dns";

export function buildResolvers() {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}