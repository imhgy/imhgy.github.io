document.querySelectorAll('.publications .record-authors').forEach((row, index) => {
  const names = row.innerHTML.trim().split(', ');
  const ownIndex = names.findIndex(name => name.includes('class="highlight"'));
  const ownIsNearEnd = ownIndex >= names.length / 2;
  const prefixCount = ownIsNearEnd ? 2 : Math.max(2, ownIndex + 1);
  const suffixStart = ownIsNearEnd ? ownIndex : names.length - 1;

  if (suffixStart <= prefixCount) return;

  const prefix = document.createElement('span');
  prefix.innerHTML = names.slice(0, prefixCount).join(', ') + ', ';

  const omitted = document.createElement('span');
  omitted.id = `publication-authors-${index}`;
  omitted.innerHTML = names.slice(prefixCount, suffixStart).join(', ') + ', ';

  const suffix = document.createElement('span');
  suffix.innerHTML = names.slice(suffixStart).join(', ');

  const separator = document.createElement('span');
  separator.textContent = ', ';

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'authors-toggle';
  toggle.setAttribute('aria-controls', omitted.id);

  let expanded = false;
  let lastWidth;

  const showState = () => {
    omitted.hidden = !expanded;
    separator.hidden = expanded;
    toggle.textContent = expanded ? '−' : '…';
    toggle.setAttribute('aria-expanded', String(expanded));
    const label = expanded ? 'Collapse author list' : `Show all ${names.length} authors`;
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
  };

  const fit = () => {
    const width = row.clientWidth;
    if (width === lastWidth) return;
    lastWidth = width;

    const fittedPrefixCount = ownIsNearEnd && width < 480 ? 1 : prefixCount;
    prefix.innerHTML = names.slice(0, fittedPrefixCount).join(', ') + ', ';
    omitted.innerHTML = names.slice(fittedPrefixCount, suffixStart).join(', ') + ', ';

    // Measure the complete list before deciding whether it needs a control.
    omitted.hidden = false;
    toggle.hidden = true;
    separator.hidden = true;
    const lineHeight = parseFloat(getComputedStyle(row).lineHeight);
    if (row.getBoundingClientRect().height > lineHeight + 1) {
      toggle.hidden = false;
      showState();
    }
  };

  toggle.addEventListener('click', () => {
    expanded = !expanded;
    showState();
  });

  row.replaceChildren(prefix, toggle, separator, omitted, suffix);
  fit();
  new ResizeObserver(fit).observe(row);
});
