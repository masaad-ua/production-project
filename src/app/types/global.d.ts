import React from 'react';

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}

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

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;
