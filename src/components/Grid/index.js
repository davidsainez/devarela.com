const cx = (...xs) => {
  let classNames = '';
  xs.forEach((x) => {
    classNames = `${classNames} ${x}`;
  });
  return classNames;
};

export const Grid = ({
  className = '',
  condensed,
  fullWidth = true,
  children,
}) => {
  const classes = ['cds--css-grid'];
  if (condensed) {
    classes.push('cds--css-grid--condensed');
  }
  if (fullWidth) {
    classes.push('cds--css-grid--full-width');
  }

  return <div className={[className, ...classes].join(' ')}>{children}</div>;
};

const toResponsiveString = (spec, breakpoint) => {
  return `cds--col-${breakpoint}-${spec}`;
};

export const ResponsiveColumn = ({
  className = '',
  sm,
  md,
  lg,
  xlg,
  max,
  children,
}) => {
  const classes = [];
  if (sm) {
    classes.push(toResponsiveString(sm, 'sm'));
  }
  if (md) {
    classes.push(toResponsiveString(md, 'md'));
  }
  if (lg) {
    classes.push(toResponsiveString(lg, 'lg'));
  }
  if (xlg) {
    classes.push(toResponsiveString(xlg, 'xlg'));
  }
  if (max) {
    classes.push(toResponsiveString(max, 'max'));
  }

  return <div className={[className, ...classes].join(' ')}>{children}</div>;
};

const toBreakpointStrings = (spec, breakpoint) => {
  const classes = [];
  if (typeof spec === 'object') {
    if (spec.span) {
      classes.push(`cds--${breakpoint}:col-span-${spec.span}`);
    }
    if (spec.offset) {
      classes.push(`cds--${breakpoint}:col-start-${spec.offset + 1}`);
    }
  } else {
    classes.push(`cds--${breakpoint}:col-span-${spec}`);
  }
  return classes;
};

export const Column = ({ className = '', sm, md, lg, xlg, max, children }) => {
  let classNames = [];
  if (sm !== undefined) {
    classNames = classNames.concat(toBreakpointStrings(sm, 'sm'));
  }
  if (md !== undefined) {
    classNames = classNames.concat(toBreakpointStrings(md, 'md'));
  }
  if (lg !== undefined) {
    classNames = classNames.concat(toBreakpointStrings(lg, 'lg'));
  }
  if (xlg !== undefined) {
    classNames = classNames.concat(toBreakpointStrings(xlg, 'xlg'));
  }
  if (max !== undefined) {
    classNames = classNames.concat(toBreakpointStrings(max, 'max'));
  }

  return (
    <div
      className={[className, cx(...classNames), 'cds--css-grid-column'].join(
        ' '
      )}
    >
      {children}
    </div>
  );
};
