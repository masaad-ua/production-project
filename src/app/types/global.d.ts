declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.sass' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.module.css' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.scss' {
    const classes: Record<string, string>;
    export default classes;
}

// SVGR: import Icon from './icon.svg' -> React component
declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare const __IS_DEV__: boolean;
