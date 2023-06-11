import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {
      id: 'asfafaf',
      label: 'Can I use React on project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'hthth',
      label: 'Can I use JS on project?',
      content:
        'You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want.',
    },
    {
      id: 'fefbrw3',
      label: 'Can I use CSS on project?',
      content:
        'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.',
    },
  ]
  return <Accordion items={items} />
}

export default AccordionPage
