function renderInitiatives(tableId, {data, fields}) {
    
    document.querySelector(`#${tableId} tbody`)
        .insertAdjacentHTML(
            'beforeend',
            Object.keys(fields)
                .reduce(
                    (acc, group) => [
                        [
                            ...acc[0],
                            `<th class="${group}" colspan="${Object.keys(fields[group].children).length}">${fields[group].title}</th>`
                        ],
                        [
                            ...acc[1],
                            ...Object.keys(fields[group].children).map(field => `<th class="${group}">${fields[group].children[field].title}</th>`),
                        ],
                    ],
                    [[], []]
                )
                .map(thSet => `<tr>${thSet.join('\n')}</tr>`)
                .join('\n'));
    const flatFields = Object.keys(fields)
        .reduce(
            (acc, group) => ({
                ...acc,
                ...fields[group].children
            }),
            {});
    const md = window.markdownit();
    const render = (content, initiative) =>
        `<td>${
            content === undefined
                ? '-'
                : content.name && content.link
                ? `<p><a href="${content.link}">${content.name}</a></p>`
                : content.name
                    ? content.name
                    : `<span class="updated">${content.updatedBy} (<a href="https://github.com/extinctionfighters/initiatives/pulls?q=is%3Apr+label%3A${initiative.meta.label}">${content.updatedAt}</a>):</span>${
                        md.render(content.content)
                        }`
            }</td>`
    ;
    document.querySelector(`#${tableId} tbody`)
        .insertAdjacentHTML(
            'beforeend',
            data.map(initiative => `<tr>${
                Object.keys(flatFields)
                    .map(field => render(initiative[field], initiative))
                    .join('')
                }</tr>`)
                .join('\n')
        );
};