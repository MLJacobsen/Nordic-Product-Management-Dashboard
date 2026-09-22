import React, { useId, useState } from 'react';
import { createPortal } from 'react-dom';

export default function AccessibleTooltip({ children, content }) {
  const tooltipId = `annual-plan-tooltip-${useId().replaceAll(':', '')}`;
  const [position, setPosition] = useState(null);

  const showTooltip = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const placement = rect.top > 180 ? 'above' : 'below';
    setPosition({
      left: Math.min(Math.max(rect.left + (rect.width / 2), 170), viewportWidth - 170),
      placement,
      top: placement === 'above' ? rect.top - 10 : rect.bottom + 10,
    });
  };

  const hideTooltip = () => setPosition(null);
  const triggerProps = {
    'aria-describedby': position ? tooltipId : undefined,
    onBlur: hideTooltip,
    onFocus: showTooltip,
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
  };

  return (
    <>
      {children(triggerProps)}
      {position && createPortal(
        <span
          className={`annual-plan-tooltip annual-plan-portal-tooltip ${position.placement}`}
          id={tooltipId}
          role="tooltip"
          style={{ left: position.left, top: position.top }}
        >
          {content || 'Description not provided'}
        </span>,
        document.body,
      )}
    </>
  );
}
